const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),
    async execute(interaction) {
      const target = interaction.options.getUser('target');
      const targetId = target?.id
      const reason = interaction.options.getString('reason') ?? 'No reason provided';
	  const channel = client.channels.fetch('1156760812799672320')
      const successEmbed = new EmbedBuilder()
      .setColor('#1aff00')
      .setTitle('Banning User')
      .setDescription(`**User:** ${target} (${targetId})\n **Reason:** ${reason}\n\n **Banned By:** ${interaction.user}`);
      const failEmbed = new EmbedBuilder()
	  .setColor('#ff0000')
	  .setTitle('Missing Permissions')
	  .setDescription(`**You do not have permission to ban. (Or the person you are trying to ban has a higher role**`);
	  //const logEmbed =  new EmbedBuilder()
	  //.setColor('#1aff00')
	  //.setTitle('User Banned')
	  //.setDescription(`**User:** ${target} (${targetId})\n **Reason:** ${reason}\n\n **Banned By:** ${interaction.user}`);
  
      await interaction.guild.members.ban(target, {reason: reason}).catch(async(error) => {
		
		if (error.code === 50013) {
			await interaction.reply({embeds: [failEmbed]})
			console.log(`User didnt have permission to ban. Error code ${error.code}`)
		}
	  })
	  await interaction.reply({embeds: [successEmbed]})
	  // await channel.send({embeds: [logEmbed]})
}};