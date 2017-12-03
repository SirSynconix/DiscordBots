// System Start
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Started");
});

var prefix = "-";

client.on("messageDelete", (m) => {
    let fireTime = new Date();
    let channel = m.guild.channels.find('name', 'logs');
    if (!channel) return;
    channel.send(`**[${fireTime}]**  Message deleted in **#${m.channel.name}** by **(**${m.author.tag}**)**\n\`\`\`\n${m.content}\n\`\`\``);
});

client.on("guildMemberAdd", (user) => {
    let fireTime = new Date();
    let channel = user.guild.channels.find('name', 'logs');
    if (!channel) return;
    channel.send(`**[${fireTime}]**  **${user.user.tag}** has joined the guild **(**${user.user.id}**)**`);
});
client.on("guildMemberRemove", (user) => {
    let fireTime = new Date();
    let channel = user.guild.channels.find('name', 'logs');
    if (!channel) return;
    channel.send(`**[${fireTime}]**  **${user.user.tag}** has left the guild **(**${user.user.id}**)**`);
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  if (command === "ping") {
    message.channel.send(`*Ping?*`).then(m => {
    m.edit(`**Pong** ` + (m.createdTimestamp - message.createdTimestamp) + `ms`);
    });
  }

if (command === "purchase") {
    message.channel.send(`**Your purchase request has been sent to the developers, we will get back to you soon!**`);
    message.member.addRole('376425962654662657');
    client.channels.get('376434443633557504').send(`<@&376148550645579777> **${message.author.tag}** is requesting a purchase!`);
  }

if (command === "nsfw") {
    message.channel.send(`**We have given you access to NSFW channel, werido...**`);
    message.member.addRole('376798592100204552');
  }

if (command === "support") {
    message.channel.send(`**Staff will be with you shortly!**`);
    client.channels.get('376434443633557504').send(`<@&376456512861634565> **${message.author.tag}** is requesting support!`);
  }

});

client.login("###");
