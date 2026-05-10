import { Collection } from "discord.js";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

export const registerTextCommands = async (client) => {

    client.textCommands = new Collection();

    const textCommandsFolder = path.join(process.cwd(), "src", "prefixCommands");

    if (!fs.existsSync(textCommandsFolder)) return;

    const folders = fs.readdirSync(textCommandsFolder)
        .filter(file => fs.statSync(path.join(textCommandsFolder, file)).isDirectory());

    for (const folder of folders) {

        const filesPath = path.join(textCommandsFolder, folder);
        const files = fs.readdirSync(filesPath)
            .filter(file => file.endsWith(".js"));

        for (const file of files) {

            const filePath = path.join(filesPath, file);
            const fileUrl = pathToFileURL(filePath).href;

            const commandModule = await import(fileUrl);

            if (!commandModule || !commandModule.default || !commandModule.default.name || typeof commandModule.default.execute != 'function') {
                console.log(`❌ Invalid handler in ${fileUrl}`);
                continue;
            }

            client.textCommands.set(commandModule.default.name, commandModule.default);
            if (Array.isArray(commandModule.default.aliases)) {
                for (const alias of commandModule.default.aliases) {
                    client.textCommands.set(alias, commandModule.default);
                }
            }
        }
    }

    console.log(`✅ Loaded ${client.textCommands.size} prefix commands`);
};