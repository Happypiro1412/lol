//This command will be required package discord.js
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../config.json");
const fs = require("fs");

exports.run = async(client, message, args) => { // Modification
  let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!crafty[message.guild.id]){ 
     crafty[message.guild.id] = {
       prefix: config.prefix
     }
  }
  
  //if (!args[0]) {
    //gw solat dulu//ya. udah selese nig.//ndk bisa
  //dah//thx
    let embed1 = new RichEmbed()
        let embed = new RichEmbed()
     .setAuthor(`*\☆ℋค℘℘ℽ★\*𓅂`, `https://cdn.discordapp.com/avatars/573045283856973825/312bc4b8b68a2b9b8688e4ac368edb34.png?size=2048?size=1024`)
        .setColor(`#ecd4fc`)
        .setThumbnail(client.user.avatarURL)
        .addField("If you have a question / bug report please report them on", "[Discord](https://discord.gg/6sNdqbx)\n_ _",`false`)
        .addField(`Are you don't know how to use this bot? do :`, `${crafty[message.guild.id].prefix}cmds`, `false`) //Kenapa? ~andra//pen biar prefix per server nya muncul///oh wait
        .setFooter("©Release 2020 | *\☆ℋค℘℘ℽ★\*𓅂 Bot | This bot is still under Development")
        .setTimestamp()
        message.channel.send(embed);
  message.delete();
}
exports.conf = { //Auto fokus anjir. uwau. anying speaker w rusak.z
  aliases: ['h']
}

exports.help = {
  name: "Help"
}