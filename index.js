require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require("discord.js");
const options = {
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
};
const client = new Client(options);
client.on(Events.ClientReady, () => {
    console.log("bot is ready!");
});
client.on(Events.MessageCreate, (message) => {
    //code
});
client.login(process.env.token);
