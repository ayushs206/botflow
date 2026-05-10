import { EmbedBuilder } from "discord.js";
import config from "../config/config.js"

export const handleMessages = async (client, message) => {

    if (message.author.bot && !config.ALLOWED_BOTS.includes(message.author.id)) return;

    const PREFIX = process.env.BOT_PREFIX;

    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    if (args.length === 0) return;

    const commandName = args.shift().toLowerCase();
    if (!commandName) return;

    let command = client.textCommands.get(commandName)
    if (!command) return;

    try {

        const isAdmin = config.ADMIN_IDS.includes(message.author.id)

        if (command.adminOnly && !isAdmin) {
            return message.reply({
                embeds: [
                    new EmbedBuilder().setColor("Red")
                        .setDescription(`You are not allowed to use this command.`)
                ]
            })
        }

        await command.execute(client, message, args);
    } catch (error) {
        console.error(`Error in *${command}*: `, error);
    }
}