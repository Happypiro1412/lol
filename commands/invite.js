const { RichEmbed, Client, uptime, client } = require("discord.js");

exports.run = (bot, message, args) => {
        let embed = new RichEmbed()
    .setAuthor(`*\☆ℋค℘℘ℽ★\*𓅂`, `https://cdn.discordapp.com/avatars/573045283856973825/312bc4b8b68a2b9b8688e4ac368edb34.png?size=2048?size=1024`)
    .setThumbnail(bot.user.avatarURL)
        .addField(`Invite me on your server :kissing_heart:`, `[Invite link](https://discordapp.com/api/oauth2/authorize?client_id=700162701565100063&permissions=8&scope=bot)`, true)
    .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
    .setTimestamp()
    .setColor(`#ecd4fc`)
        message.channel.send(embed);
}