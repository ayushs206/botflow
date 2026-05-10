import { Events } from "discord.js"
import { logToConsole, setStatus } from "../controllers/client.ready.js"

export const readyEvent = async (client) => {
    
    client.once(Events.ClientReady, () => {
        
        setStatus(client);
        logToConsole(client);
    
    })
}