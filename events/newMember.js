const { Events, EmbedBuilder } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,
  once: true,
  execute(member) {
    const channel = member.client.channels.cache.get("943917750210940941");
    const Embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Welcome to our server!")
      .setAuthor({
        name: member.user.username,
        iconURL: member.user.displayAvatarURL(),
      })
      .setDescription(
        "I hope you enjoy your stay and stick around for the ride!"
      )
      .setThumbnail(member.user.displayAvatarURL())
      .setImage("https://media.giphy.com/media/VIVmZA63MwdcCUN0KC/giphy.gif")
      .setTimestamp();

    channel.send({ embeds: [Embed] });
    console.log(`${member.user.tag} has just joined the server`);
  },
};
