import { Events } from "discord.js"
import { handleSlashCommands } from "../controllers/interaction.create.js"

export const interactionEvent = async (client) => {

    client.on(Events.InteractionCreate, async (interaction) => {

        if (interaction.isChatInputCommand()) {
            handleSlashCommands(client, interaction)
        }
    })
}