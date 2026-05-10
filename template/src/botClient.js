import { Client, Events, GatewayIntentBits } from "discord.js"

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,

        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,

        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

export const initiateClient = async () => {
    try {
        await client.login(process.env.DISCORD_BOT_TOKEN);
    } catch (error) {
        throw new Error(`Logging in bot failed: ${error}`)
    }
};

/* --------------- Registerers --------------- */
import { registerTextCommands } from "./registerers/text.register.js"
registerTextCommands(client);
import { registerSlashCommands } from "./registerers/slash.register.js";
registerSlashCommands(client);

/* --------------- Importing Events --------------- */
import { readyEvent } from "./events/client.ready.js"
import { messageEvent } from "./events/message.create.js"
import { interactionEvent } from "./events/interaction.create.js"


/* --------------- Calling Events --------------- */
readyEvent(client);
messageEvent(client);
interactionEvent(client);
