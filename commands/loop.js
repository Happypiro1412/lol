let { RichEmbed } = require('discord.js')
const { handleVideo, queue } = require("../index.js")

exports.run = async(client, msg, args) => { //mampus terkejut merah semua :u
  let message = msg
  const serverQueue = queue.get(message.guild.id);
  if(!message.member.voiceChannel) return message.channel.send({
        embed: {
            description: `${message.author}, plz connect vc :).`
        }
    });
    if(!serverQueue) return message.channel.send({
        embed: {
            description: `Nobody plays`
        }
    });
    serverQueue.loop = !serverQueue.loop;
    client.queue.set(message.guild.id, serverQueue)
    message.react('🔁');
    if(serverQueue.loop) return message.channel.send({
        embed: {
            description: `:repeat: repeats the current queue!`
        }
    })
    message.react('🔁');
    return message.channel.send({
        embed: {
            description: `:repeat: Stop repeating the current queue!`
        }
    })
}//:V