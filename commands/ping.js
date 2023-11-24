
const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong! :ping_pong:');
	},
};

