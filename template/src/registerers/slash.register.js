import { Collection, REST, Routes } from "discord.js";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

export const registerSlashCommands = async (client) => {

    client.slashCommands = new Collection();

    const slashCommandsFolder = path.join(process.cwd(), "src", "slashCommands");

    if (!fs.existsSync(slashCommandsFolder)) return;

    const folders = fs.readdirSync(slashCommandsFolder)
        .filter(file => fs.statSync(path.join(slashCommandsFolder, file)).isDirectory());

    const commands = [];

    for (const folder of folders) {

        const filesPath = path.join(slashCommandsFolder, folder);
        const files = fs.readdirSync(filesPath)
            .filter(file => file.endsWith(".js"));

        for (const file of files) {

            const filePath = path.join(filesPath, file);
            const fileUrl = pathToFileURL(filePath).href;

            const commandModule = await import(fileUrl);

            if (!commandModule || !commandModule.data || typeof commandModule.execute != 'function') {
                console.log(`❌ Invalid handler in ${fileUrl}`);
                continue;
            }

            commands.push(commandModule.data.toJSON());

            client.slashCommands.set(commandModule.data.name, commandModule);
        }
    }

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            
            /* For a single guild, use this: */
            Routes.applicationGuildCommands(process.env.DISCORD_BOT_ID, process.env.DISCORD_GUILD_ID),
            
            /* For every guild, use this: */
            // Routes.applicationCommands(process.env.DISCORD_BOT_ID),
            
            { body: commands },
        );

        console.log(`✅ Successfully reloaded ${commands.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
};