import { EmbedBuilder } from "discord.js";
import config from "../config/config.js"

export const handleSlashCommands = async (client, interaction) => {

    const command = client.slashCommands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(client, interaction);
    } catch (error) {
        console.error(`Error executing ${interaction.commandName}`, error);

        const errorEmbed = new EmbedBuilder()
            .setColor("Yellow")
            .setTitle("⚠️ Command Error")
            .setDescription("An unexpected error occurred while executing this command.")
            .setTimestamp();

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ embeds: [errorEmbed], ephemeral: true });
        } else {
            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    }
}