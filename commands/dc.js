const Djs = require("discord.js");
const { RichEmbed, Client } = require("discord.js");
const config = require("../config.json");
const fs = require("fs");

exports.run = (bot, message, args, client) => {
    let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!crafty[message.guild.id]){ 
     crafty[message.guild.id] = {
       prefix: config.prefix
     }
  }
        let embed = new RichEmbed()
        .setAuthor(`*\☆ℋค℘℘ℽ★\*𓅂`, `https://cdn.discordapp.com/attachments/718305766049841210/718307129462620240/JPEG_20200602_131016.jpg`)
        .setColor(`#70F811`)
        //.addField("There is 21 commands you can use", `Write \`${crafty[message.guild.id].prefix}(name of the command)\`to use the commands\n\n`, false)
        //.addField("Commands :", `:grey_exclamation: HELP\n» If you need help to use this bot\n:grey_question: INFO\n» Information of the bot\n:desktop: CMDS\n» Avaible commands to use\n<:Youtube:588594913243955200> PLAY\n» Play your music with ${crafty[message.guild.id].prefix}play [URL/NAME]\n» Right now our bot is only can play from youtube\n:pause_button: PAUSE\n» You don't want to miss your favorite video / song?\n:stop_button: STOP\n» You don't want HAPPY tired?\n:repeat: LOOP\n» You want to loop your Video/Songs?\n:speaker: VOLUME\n» HAPPY is too noisy?\n:next_track: SKIP\n» You don't like it? SKIP IT\n:inbox_tray: INVITE\n» Take HAPPY with you <3\n:satellite: PING\n» Check the speed that made HAPPY and you meet`, `false`)
        .addField("Disconnect command :","`queue`", false)
      //  .addField("General commands :", "`say  profile  help  info  cmds  ping  invite`", false)
     //   .addField("Fun commands :", "`8ball  `", false)
       // .addField("Moderation commands :", "`clear  prefix  mute  unmute  kick  warn`", false)
        //.addField("Other commands will be added soon :ok_hand:","_ _","true")         //ngapain? ~andra
     //   .setFooter("©Release 2020 | *\☆ℋค℘℘ℽ★\*𓅂 Bot | This bot is still under Development")
        .setTimestamp()
        message.channel.send(embed);
  message.delete();
}
