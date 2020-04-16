const { RichEmbed, Client, uptime, client } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");
const cfg = require('../config.json')
const config = require("../config.json");
function convertMS(ms) {
    var y, mt, w, d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    w = Math.floor(d / 7);
    d = d % 7;
    mt = Math.floor(w / 4);
    w = d % 4;
    y = Math.floor(mt / 12);
    mt = d % 12;
    return {
      y: y
      , mt: mt
      , w: w
        , d: d
        , h: h
        , m: m
        , s: s
    };
};
exports.run = (bot, message, args) => {
    let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!crafty[message.guild.id]){ 
     crafty[message.guild.id] = {
       prefix: config.prefix
     }
  }
     let u = convertMS(bot.uptime);
    let uptime = u.y + "-" + u.mt + "-" + u.w + "-" + u.d + " " + u.h + ":" + u.m + ":" + u.s + ""
    const duration = moment.duration(bot.uptime)
        let embed = new RichEmbed()
    .setAuthor(`*\☆ℋค℘℘ℽ★\*𓅂`, `https://cdn.discordapp.com/avatars/573045283856973825/312bc4b8b68a2b9b8688e4ac368edb34.png?size=2048?size=1024`)
        
        .addField(`Name`, `*\☆ℋค℘℘ℽ★\*𓅂`, true)
        .addField(`Discriminator`, `#1185`, true)
        .addField(`Prefix`, `${crafty[message.guild.id].prefix}`, true)
        .addField(`Version`, `[1.0](https://discord.gg/6sNdqbx)`, true)
    .addField(`Node JS`, `[9.11.2](https://nodejs.org/en)`, true)
    .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Server`, `${bot.guilds.size}`, "true")
        .addField(`Channels`, `${bot.channels.size}`, "true")
        .addField(`Users`, `${bot.users.size}`, "true")
                .addField(`Support`, `[server](https://discord.gg/6sNdqbx)`, true)
                .addField(`DM`, `[*\☆ℋค℘℘ℽ★\*𓅂#1185](https://discordapp.com/channels/@me/658669973199257610)`, true)
    .addField(`Developer`, `[*\☆ℋค℘℘ℽ★\*𓅂](https://discordapp.com/channels/@me/658669973199257610)`, true)
        .addField(`Created at`, `${bot.user.createdAt.toLocaleString()}`, `true`)
        .addField(`Thanks for using our bot, we love you all_                          _`, `From creator of *\☆ℋค℘℘ℽ★\*𓅂 bot :heart:`, `true`)
    .setFooter("©Release 2020 | *\☆ℋค℘℘ℽ★\*𓅂 Bot | This bot is still under Development")
    .setTimestamp()
    .setColor(0xECD4FC)
        message.channel.send(embed);
    };

