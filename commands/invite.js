const { RichEmbed, Client, uptime, client } = require("discord.js");

exports.run = (bot, message, args) => {
        let embed = new RichEmbed()
    .setAuthor(`*\☆ℋค℘℘ℽ★\*𓅂`, `https://cdn.discordapp.com/attachments/718305766049841210/718307129462620240/JPEG_20200602_131016.jpg`)
    .setThumbnail(bot.user.avatarURL)
        .addField(`Invite me on your server :kissing_heart:`, `[Invite link](https://discordapp.com/api/oauth2/authorize?client_id=700162701565100063&permissions=8&scope=bot)`, true)
    .setFooter("©Release 2020 | *\☆ℋค℘℘ℽ★\*𓅂 Bot | This bot is still under Development")
    .setTimestamp()
    .setColor(`#11FBFF`)
        message.channel.send(embed);
}