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
     .setAuthor(`*\☆ℋค℘℘ℽ★\*𓅂`, `https://cdn.discordapp.com/attachments/718305766049841210/718307129462620240/JPEG_20200602_131016.jpg`)
        .setColor(`#14FCC4`)
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