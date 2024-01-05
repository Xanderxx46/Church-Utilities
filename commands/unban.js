const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unban someone')
		.addStringOption(option =>
			option
				.setName('target')
				.setDescription('The user ID to unban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for unbanning')
				.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),
    async execute(interaction) {
      const target = interaction.options.getString('target');
      const reason = interaction.options.getString('reason') ?? 'No reason provided';
      const successEmbed = new EmbedBuilder()
      .setColor('#1aff00')
      .setTitle('Unbanning User')
      .setDescription(`**User:** <@${target}> (${target})\n **Reason:** ${reason}\n\n **Unbanned By:** ${interaction.user}`);
      const failEmbed = new EmbedBuilder()
	  .setColor('#ff0000')
	  .setTitle('User Not Banned')
	  .setDescription(`**User <@${target}> is not banned. Please use a different user ID** \n\n If you are sure this user is banned, please check with Xander.`)
	  await interaction.guild.members.unban(target, {reason: reason}).catch(async(error) => {
		
		if (error.code === 10026) {
			await interaction.reply({embeds: [failEmbed]})
			console.error('User was not in server.', error)
		}
	  })
	  await interaction.reply({embeds: [successEmbed]})
}};