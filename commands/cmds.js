const Djs = require("discord.js");
const { RichEmbed, Client } = require("discord.js");
const config = require("../config.json");
const fs = require("fs");


//dule.exports.run = async (client, msg, args) => { // Modification. baca dm lg.
//  let opti = args.slice(0).join(' ')
//  let optic = opti.toLocaleLowerCase()
//if(!opti) return msg.channel.send('help here\nhelp dm')
  
//if(opti.match('here')) {
//    let embed = new Djs.RichEmbed()
//    .setTitle('Help Command')
//    .setColor('BLUE')
//    .setTimestamp()
//    .setThumbnail(client.user)
//    msg.channel.send(embed)
//}
  
//  if(opti.match('dm')) {
//    let embed = new Djs.RichEmbed()
 //   .setTitle('Help Command')
//    .setColor('BLUE')
//    .setTimestamp()
//    .setThumbnail(client.user)
//    msg.author.send(embed)
//  }
//
exports.run = (bot, message, args, client) => {
    let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!crafty[message.guild.id]){ 
     crafty[message.guild.id] = {
       prefix: config.prefix
     }
  }
        let embed = new RichEmbed()
        .setAuthor(`Zetsuya | ぜつや`, `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`)
        .setColor(`#ecd4fc`)
        .addField("Commands :", `:grey_exclamation: HELP\n» If you need help to use this bot\n:grey_question: INFO\n» Information of the bot\n:desktop: CMDS\n» Avaible commands to use\n<:Youtube:588594913243955200> PLAY\n» Play your music with ${crafty[message.guild.id].prefix}play [URL/NAME]\n» Right now our bot is only can play from youtube\n:pause_button: PAUSE\n» You don't want to miss your favorite video / song?\n:stop_button: STOP\n» You don't want Zetsuya tired?\n:repeat: LOOP\n» You want to loop your Video/Songs?\n:speaker: VOLUME\n» Zetsuya is too noisy?\n:next_track: SKIP\n» You don't like it? SKIP IT\n:inbox_tray: INVITE\n» Take Zetsuya with you <3\n:satellite: PING\n» Check the speed that made Zetsuya and you meet`, `false`)
        .addField("Other commands will be added soon :ok_hand:","_ _","true")         //ngapain? ~andra
        .setFooter("©Release 2019 | Zetsuya Bot | This bot is still under Development")
        .setTimestamp()
        message.channel.send(embed);
}
