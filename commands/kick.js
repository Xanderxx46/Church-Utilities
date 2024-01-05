const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Select a member and kick them.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to kick')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for kicking'))
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
		.setDMPermission(false),
    async execute(interaction) {
      const target = interaction.options.getUser('target');
      const targetId = target?.id
      const reason = interaction.options.getString('reason') ?? 'No reason provided';
      const successEmbed = new EmbedBuilder()
      .setColor('#1aff00')
      .setTitle('Kicking User')
      .setDescription(`**User:** ${target} (${targetId})\n **Reason:** ${reason}\n\n **Kicked By:** ${interaction.user}`);
      const failEmbed = new EmbedBuilder()
	  .setColor('#ff0000')
	  .setTitle('MIssing Permissions')
	  .setDescription(`**You do not have permission to kick. (Or the person you are trying to kick has a higher role than you.)**`)
  
	  await interaction.guild.members.kick(target, {reason: reason}).catch(async(error) => {
		
		if (error.code === 50013) {
			await interaction.reply({embeds: [failEmbed]})
			console.log(`User didnt have permission to kick. Error code ${error.code}`)
		}
	  })
	  await interaction.reply({embeds: [successEmbed]})
}};