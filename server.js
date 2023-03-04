const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});

client.on("ready", () => {
  console.log(`${client.user.tag} でログインしています。`);
});

client.on("messageCreate", async msg => {
  if (msg.content === "!ping") {
    msg.reply("Pong!");
  }
});

client.login( process.env.DISCORD_BOT_TOKEN );

/*
function sendReply(message, text){
  message.reply(text)
    .then(console.log("リプライ送信: " + text))
    .catch(console.error);
}

function sendMsg(channelId, text, option={}){
  client.channels.get(channelId).send(text, option)
    .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
    .catch(console.error);
}
*/
