const { RichEmbed, Client } = require("discord.js");

exports.run = (bot, message, args) => {
   let start = Date.now(); message.channel.send('_ _').then(message => { 
      message.delete(1);
        let diff = (Date.now() - start); 
        let API = Math.round((bot.ping).toFixed())
        let embed = new RichEmbed()
        .setTitle(`:hourglass: ping`)
        .setColor(`#770DF7`)
        .addField("Latency", `${diff}ms`, true)
        .addField("API", `${API}ms`, true)
        .setFooter("©Release 2020 | *\☆ℋค℘℘ℽ★\*𓅂 Bot | This bot is still under Development")
        message.channel.send(embed);
    });
}

