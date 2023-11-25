const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('request-role')
        .setDescription('Request a custom role.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('What should your roles name be?')
                .setRequired(true)),
    async execute(interaction) {
        const name = interaction.options.getString('name')
        const commandUser = interaction.user
        const commandUserId = commandUser?.id
        
        const testEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Someone has requested a role.')
        .setDescription(`<@${commandUserId}> has requested a role. \n The name: **${name}**`)
        
		console.log(name)
            await interaction.reply({content: '<@829909201262084096>', embeds: [testEmbed]});
        }
    };
