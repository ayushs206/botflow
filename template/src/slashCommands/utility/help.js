import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Lists all features of the bot.")

export const execute = async (client, interaction) => {

    const helpEmbed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle("Client Manager Bot - Help")
        .setDescription("Here are the available commands and features of the Client Manager Bot:")
        .addFields(
            { name: "/help", value: "Displays this help message." },
            { name: "/register", value: "Registers client information with the bot." },
            { name: "/transfer", value: "Transfer client information to another user." },
            { name: "/update", value: "Update registered client information." },
            { name: "/getinfo", value: "View registered client information." },
            { name: "/delete", value: "Delete registered client information." },
            { name: "/listall", value: "Lists all registered clients." }
        )
        // .setFooter({ text: "If you have any questions or need support, please contact the bot administrator." });

    await interaction.reply({ embeds: [helpEmbed] });
}