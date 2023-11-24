const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const helpEmbed = new EmbedBuilder()
.setColor('#586b20')
.setTitle('Help Menu')
.setDescription('</ping:1174498730540535852> - Bot replies with "Pong!"\n </help:1174498730540535850> - Shows this menu\n </hug:1174521338145280020> - Hug the person of your choosing\n </kiss:1174518928685416508> - Kiss the person of your choosing.\n </slap:1174498730540535853> - Slap the person of your choosing.\n </truth-or-dare:1173851047886856254> - Get a truth or a dare based on your choice.\n </roll-dice:1174526265521361020> - Roll up to 3 die.\n </generate-random-number:1174532470721499286> - Get a random number based on your minimum and maximum choice.');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows the help menu'),
	async execute(interaction) {
		await interaction.reply({embeds: [helpEmbed]});
	},
};