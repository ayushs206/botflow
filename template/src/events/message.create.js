import { Events } from "discord.js"
import { handleMessages } from "../controllers/message.create.js"

export const messageEvent = async (client) => {

    client.on(Events.MessageCreate, async (message) => {

        handleMessages(client, message)
    })
}