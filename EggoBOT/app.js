// System Start
const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require('ms');
const YouTube_API_Token = `###`;
var YouTube_Client = require('youtube-node');
var yt = new YouTube_Client();
yt.setKey(YouTube_API_Token);
const ytdl = require('ytdl-core');

const perpage = 10

client.on("ready", () => {
  console.log("Started");

client.user.setPresence({ game: { name: '-help for help', type: 0 } });

});

var prefix = "-";

// System End
// Client Start

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

// Client End
// Command Start

let args = message.content.split(" ").slice(1);

  if (command === "ping") {
    message.channel.send(`*Ping?*`).then(m => {
    m.edit(`**Pong** ` + (m.createdTimestamp - message.createdTimestamp) + `ms`);
    });
  }

if (command === "invite") {
   message.channel.send(`**Invite link sent to DMs**`)
   message.author.send(`https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=366040616762867723`)
}

if (command === "discord") {
   message.channel.send(`**Eggo discord link sent to DMs**`)
   message.author.send(`https://discord.gg/BCzMr9p`)
}

if (command === "add") {
   let numArray = args.map(n=> parseInt(n));
   message.channel.send(numArray[0] + numArray[1]);
}

  if (command === "avatar") {
      let member = message.mentions.members.first();
      if (!member) {
          message.channel.send(`**Your Avatar** ` + message.author.avatarURL);
      } else {
          message.channel.send(member.user.username + `**'s Avatar** ` + member.user.avatarURL);
      }
  }

  if (command === "roll") {
  const responses = [
   '1', '2', '3', '4', '5', '6'
] 
   message.channel.send(`:game_die: ${responses[Math.floor(Math.random() * responses.length)]}`);
}

  if (command === "8ball") {
  const responses = [
   'Yes', 'No', 'Maybe', 'I don\'t know', 'Sure', 'Ask me later\, I\'m eatin\' cheese puffs', 'Hell Naw', 'Hell Yea'
] 
   message.channel.send(`:8ball: ${responses[Math.floor(Math.random() * responses.length)]}`);
}

  if (command === "flip") {
  const responses = [
   'Heads', 'Tails'
] 
   message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
}

  if (command === "marryme") {
  const responses = [
   'Your Ugly', 'Yes', 'No', 'Why', 'Sure', 'Ugh...why though?', 'Hell Naw', 'Hell Yea'
] 
   message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
}

  if (command === "members") {
    message.channel.send(`${member.count}`);
}

  if (command === "purge") {
    message.channel.send(`**This feature is currently disabled.**`);
}

  if (command === "eateggo") {
    message.channel.send(`**Living Eggo:** NO! PLEASE IM BEGGIN YA!! PLS DO NUT EAT MEH! WHY!`);
    message.channel.send(`**You:** *eats eggo*`);
    message.channel.send(`**Ghost Eggo:** bro...`);
}

if (command === "meme") {
  let meme = Math.floor((Math.random() * 22) + 1);
  if (message.channel.name !== 'memes') {
    message.delete().then(message.channel.send(`This command can only be used in #memes`));
    return;
  } else
      if (meme === 1) {
        message.delete().then(message.channel.sendFile(`./Memes/meme1.jpg`));
      } else
  if (meme === 2) {
    message.delete().then(message.channel.sendFile(`./Memes/meme2.jpg`));
  } else
  if (meme === 3) {
    message.delete().then(message.channel.sendFile(`./Memes/meme3.jpg`));
  } else
  if (meme === 4) {
    message.delete().then(message.channel.sendFile(`./Memes/meme4.jpg`));
  } else
  if (meme === 5) {
    message.delete().then(message.channel.sendFile(`./Memes/meme5.jpg`));
  } else
  if (meme === 6) {
    message.delete().then(message.channel.sendFile(`./Memes/meme6.jpg`));
  } else
  if (meme === 7) {
    message.delete().then(message.channel.sendFile(`./Memes/meme7.jpg`));
  } else
  if (meme === 8) {
    message.delete().then(message.channel.sendFile(`./Memes/meme8.jpg`));
  } else
      if (meme === 9) {
        message.delete().then(message.channel.sendFile(`./Memes/meme9.jpg`));
      } else
      if (meme === 10) {
        message.delete().then(message.channel.sendFile(`./Memes/meme10.jpg`));
      } else
      if (meme === 11) {
        message.delete().then(message.channel.sendFile(`./Memes/meme11.jpg`));
      } else
      if (meme === 12) {
        message.delete().then(message.channel.sendFile(`./Memes/meme12.jpg`));
      } else
      if (meme === 13) {
        message.delete().then(message.channel.sendFile(`./Memes/meme13.jpg`));
      } else
      if (meme === 14) {
        message.delete().then(message.channel.sendFile(`./Memes/meme14.jpg`));
      } else
      if (meme === 15) {
        message.delete().then(message.channel.sendFile(`./Memes/meme15.jpg`));
      } else
      if (meme === 16) {
        message.delete().then(message.channel.sendFile(`./Memes/meme16.jpg`));
      } else
      if (meme === 17) {
        message.delete().then(message.channel.sendFile(`./Memes/meme17.jpg`));
      }
  if (meme === 18) {
    message.delete().then(message.channel.sendFile(`./Memes/meme18.jpg`));
  }
  if (meme === 19) {
    message.delete().then(message.channel.sendFile(`./Memes/meme19.jpg`));
  }
  if (meme === 20) {
    message.delete().then(message.channel.sendFile(`./Memes/meme20.jpg`));
  }
  if (meme === 21) {
    message.delete().then(message.channel.sendFile(`./Memes/meme21.jpg`));
  }
  if (meme === 22) {
    message.delete().then(message.channel.sendFile(`./Memes/meme22.jpg`));
  }
  if (meme === 23) {
    message.delete().then(message.channel.sendFile(`./Memes/meme23.jpg`));
  }
};

if (command === "lockdown") {
  if (message.member.hasPermission("MANAGE_CHANNELS")) {
  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('please put a time for the lockdown.');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('**The channel lockdown has bee lifted.**');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.reply(`has issued a channel lockdown for **${ms(ms(time), { long:true })}**.`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('**The channel lockdown has been lifted.**')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
} else {
         message.channel.send(`:x: You don't have the \`MANAGE_CHANNELS\` permission!`);
         return;
       }}

    if (command === "kick") {
        let member = message.mentions.members.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        
        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (!member) {
                message.channel.send(`:x: Please mention a valid guild member!`)
                return;
            }
            if (!reason) {
                member.kick(`Kicked by ${message.author.tag}`).then(() => {
                    message.channel.send(`:white_check_mark: **${member.user.tag}** was kicked.`)
                    let fireTime = new Date();
                    let channel = member.guild.channels.find('name', 'logs');
                    if (!channel) return;
                    channel.send(`**[${fireTime}]**  **${member.user.tag}** kicked by **${message.author.tag}** **(**${member.user.id}**)** - **Reason:** None provided`);
                }).catch(() => {message.channel.send(`:x: Either that user isn't kickable, or the bot doesn't have permissions!`)});
            } else {
                member.kick(reason).then(() => {
                    message.channel.send(`:white_check_mark: **${member.user.tag}** was kicked.`)
                    let fireTime = new Date();
                    let channel = member.guild.channels.find('name', 'logs');
                    if (!channel) return;
                    channel.send(`**[${fireTime}]**  **${member.user.tag}** kicked by **${message.author.tag}** **(**${member.user.id}**)** - **Reason:** ${reason}`);
                }).catch(() => {message.channel.send(`:x: Either that user isn't kickable, or the bot doesn't have permissions!`)});
            }
        } else {
          message.channel.send(`:x: You don't have the \`KICK_MEMBERS\` permission!`);
          return;
        }}

    if (command === "ban") {
        let member = message.mentions.members.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        
        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (!member) {
                message.channel.send(`:x: Please mention a valid guild member!`)
                return;
            }
            if (!reason) {
                member.ban(`Banned by ${message.author.tag}`).then(() => {
                    message.channel.send(`:white_check_mark: **${member.user.tag}** was banned.`)
                    let fireTime = new Date();
                    let channel = member.guild.channels.find('name', 'logs');
                    if (!channel) return;
                    channel.send(`**[${fireTime}]**  **${member.user.tag}** banned by **${message.author.tag}** **(**${member.user.id}**)** - **Reason:** None provided`);
                }).catch(() => {message.channel.send(`:x: Either that user isn't bannable, or the bot doesn't have permissions!`)});
            } else {
                member.ban(reason).then(() => {
                    message.channel.send(`:white_check_mark: **${member.user.tag}** was banned.`)
                    let fireTime = new Date();
                    let channel = member.guild.channels.find('name', 'logs');
                    if (!channel) return;
                    channel.send(`**[${fireTime}]**  **${member.user.tag}** banned by **${message.author.tag}** **(**${member.user.id}**)** - **Reason:** ${reason}`);
                }).catch(() => {message.channel.send(`:x: Either that user isn't bannable, or the bot doesn't have permissions!`)});
            }
        } else {
          message.channel.send(`:x: You don't have the \`BAN_MEMBERS\` permission!`);
          return;
        }}

  if (command === "play") {
        
        const args = message.content.split(" ").slice(1).join(" ");
        const voiceChannel = message.member.voiceChannel;
        const voice = message.guild.voiceConnection;
        
        if (!args) {
            const embed22 = new Discord.RichEmbed()
      embed22.setDescription(`ERR! Couldn't find any search terms or a url`);
      embed22.setAuthor(message.author.tag, message.author.avatarURL)
      message.channel.send({ embed: embed22 });
      return;
        }

  yt.search(args, 1, function(error, result) {
    if (error) {
      const embed22 = new Discord.RichEmbed()
      embed22.setDescription(`ERR! Couldn't find the video to play`);
      embed22.setAuthor(message.author.tag, message.author.avatarURL)
      message.channel.send({ embed: embed22 });
      return;
    } else {
      if (!voiceChannel) {
        const embed222 = new Discord.RichEmbed()
        embed222.setDescription(`ERR! You are not in a voice channel`);
        embed222.setAuthor(message.author.tag, message.author.avatarURL)
        message.channel.send({ embed: embed222 });
        return;
      }
      voiceChannel.join()
      .then(connnection => {
        const stream = ytdl(`https://www.youtube.com/watch?v=${result.items[0].id.videoId}`, { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        const embed = new Discord.RichEmbed()
        embed.addField("Now playing:", `**${result.items[0].snippet.title}** by ${result.items[0].snippet.channelTitle}`, true);
        embed.setAuthor(message.author.tag, message.author.avatarURL)
        embed.setThumbnail(result.items[0].snippet.thumbnails.default.url)
        message.channel.send({ embed: embed });
        dispatcher.on('end', () => voiceChannel.leave());
    })}})}

if (command === "stop") {
const voice = message.guild.voiceConnection;
if (!voice) {
const embed = new Discord.RichEmbed()
embed.setDescription(`ERR! No music being played`);
embed.setAuthor(message.author.tag, message.author.avatarURL)
message.channel.send({ embed: embed });
} else {
if (!voice.dispatcher) return;
voice.dispatcher.end();
voice.disconnect();
const embed1 = new Discord.RichEmbed()
embed1.setDescription(`Music has been stopped`);
embed1.setFooter(message.author.tag, message.author.avatarURL)
message.channel.send({ embed: embed1 });
}}

    if (message.content.toLowerCase().startsWith(prefix + `resume`)) {
        const voiceChannel = message.member.voiceChannel;
        const voice = message.guild.voiceConnection;
        
        if (!voice) {
const embed = new Discord.RichEmbed()
embed.setDescription(`ERR! No music being played`);
embed.setAuthor(message.author.tag, message.author.avatarURL)
message.channel.send({ embed: embed });
} else {
    if (!voiceChannel) {
        const embed = new Discord.RichEmbed()
embed.setDescription(`ERR! You are not in a voice channel`);
embed.setAuthor(message.author.tag, message.author.avatarURL)
message.channel.send({ embed: embed });
    } else {
        if (voice.dispatcher.paused === true) {
            if (!voice.dispatcher) return;
        voice.dispatcher.resume();
        const embed = new Discord.RichEmbed()
        embed.setDescription(`Current music has been resumed`);
        embed.setAuthor(message.author.tag, message.author.avatarURL)
        message.channel.send({ embed: embed });
        }
    }}}

    if (message.content.toLowerCase().startsWith(prefix + `pause`)) {
        const voiceChannel = message.member.voiceChannel;
        const voice = message.guild.voiceConnection;
        
        if (!voice) {
const embed = new Discord.RichEmbed()
embed.setDescription(`ERR! No music being played`);
embed.setAuthor(message.author.tag, message.author.avatarURL)
message.channel.send({ embed: embed });
} else {
    if (!voiceChannel) {
        const embed = new Discord.RichEmbed()
embed.setDescription(`ERR! You are not in a voice channel`);
embed.setAuthor(message.author.tag, message.author.avatarURL)
message.channel.send({ embed: embed });
    } else {
        if (!voice.dispatcher) return;
        voice.dispatcher.pause();
        const embed = new Discord.RichEmbed()
        embed.setDescription(`Current music has been paused`);
        embed.setAuthor(message.author.tag, message.author.avatarURL)
        message.channel.send({ embed: embed });
    }}}



  if (command === "help") {
 message.channel.send("**List of commands sent to your DMs** :turkey:");
 message.author.send({embed: new Discord.RichEmbed()
.setTitle("Commands")
.setAuthor("Commands", client.user.avatarURL)
.addField("System", "-help\n-ping\n-discord\n-invite")
.addField("Fun Commands", "-marryme\n-8ball\n-avatar\n-roll\n-flip\n-add\n-eateggo")
.addField("Moderation", "-kick\n-ban\n-lockdown\n-purge (Disabled)")
.addField("Music", "-play\n-stop\n-resume")
.setTimestamp()
.setColor("#0A2BF9")})
}
});

client.login("###");
