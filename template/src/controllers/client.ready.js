import { ActivityType } from "discord.js";

export const setStatus = async (client) => {
    client.user.setPresence({
        activities: [{ name: "with discord", type: ActivityType.Competing }],
        status: "dnd",
    });
}

export const logToConsole = async (client) => {
    console.log(`${client.user.tag} Logged into ur service!!`)
}