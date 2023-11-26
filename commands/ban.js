const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a user from the server.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Who should be banned?')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Why is this user being banned?')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user')
        const userId = user?.id
        const reason = interaction.options.getString('reason')
        const commandUser = interaction.user
        const commandUserId = commandUser?.id
        const userRolePosition = user.roles.cache.highest; // Highest role of the target user
        const requestUserRolePosition = interaction.member.roles.cache.highest; // Highest role of the user running the cmd
        const botRolePosition = interaction.guild.members.me.roles.cache.highest; // Highest role of the bot

        await interaction.reply('Attempting to ban.');
         if (!user) {
             await interaction.editReply("That user doesn't exist in this server.");
             return;
        }
        if (userId === interaction.guild.ownerId) {
        await interaction.editReply("You can't ban that user because they're the server owner.");
        return;
        }
        if (userRolePosition >= requestUserRolePosition) {
            await interaction.editReply(
              "You can't ban that user because they have the same/higher role than you."
            );
            return;
          }
      
          if (userRolePosition >= botRolePosition) {
            await interaction.editReply(
              "I can't ban that user because they have the same/higher role than me."
            );
            return;
          }
        try {
            await user.ban({ reason });
            await interaction.editReply(
              `User ${user} has been banned\nReason: **${reason}**\nBanned by: <@${commandUserId}>`
            );
          }
          catch (error) {
            console.log(`There was an error when banning: ${error}`);
            await interaction.reply(`Error while using this command. ${error}`)
          }
        },
    };