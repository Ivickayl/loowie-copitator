//const Discord = require("discord.js");
const { Client, Attachment } = require("discord.js");
const Config = require("./config.json");

const prefix = process.env.PREFIX;
const bot = new Client();

bot.on("ready", () => {
  console.log("READY");
});

/*bot.on("message", message => {
  if (
    Config.nicknames.indexOf(message.author.username.toLocaleLowerCase()) !== -1
  ) {
    content = message.content;

    const channel = message.guild.channels.find(
      ch => ch.name === Config.channel
    );

    if (!channel) return;

    sendMessage(message.author.username, channel, content);

    for (const iterator of message.attachments) {
      const attachment = new Attachment(iterator[1].url);
      sendMessage(message.author.username, channel, attachment);
    }
  }
});*/

function sendMessage(author, channel, content) {
  if (typeof content === "string") {
    channel.send(`${author} : ${content}`);
  } else {
    channel.send(`${author}`, content);
  }
}

bot.on("messageDelete", message => {
  if (
    Config.nicknames.indexOf(message.author.username.toLocaleLowerCase()) !== -1
  ) {
    content = message.content;

    const channel = message.guild.channels.find(
      ch => ch.name === Config.channel
    );

    if (!channel) return;

    sendMessage(message.author.username, channel, content);

    for (const iterator of message.attachments) {
      //console.log(message.attachments);
      imgUrl = iterator[1].proxyURL;
      const attachment = new Attachment(imgUrl);

      //console.log(iterator[1].proxyURL);

      sendMessage(message.author.username, channel, attachment);
    }
  }
});

bot.login(process.env.TOKEN);
