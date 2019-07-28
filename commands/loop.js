let { RichEmbed } = require('discord.js')

exports.run = async(client, msg, args, func, guild, color) => {
  const queue = new Map()
 const serverQueue = queue.get(msg.guild.id)
  if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
  if (!serverQueue) return msg.channel.send("This server doesn't have a queue");
  if(serverQueue.voiceChannel.id !== msg.member.voiceChannel.id)  return msg.channel.send(`You must be in **${serverQueue.voiceChannel.name}** to repeat the queue`);
  serverQueue.loop = !serverQueue.loop;
  return msg.channel.send(`🔂 **${serverQueue.loop ? "Enabled" : "Disabled"}!**`);
}