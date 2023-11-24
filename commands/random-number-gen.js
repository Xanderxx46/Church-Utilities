const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('generate-random-number')
		.setDescription('Generate a random number between the 2 numbers you inputted.')
        .addIntegerOption(option =>
            option.setName('min')
                .setDescription('Set the minimum for the number generator.')
                .setRequired(true))
		.addIntegerOption(option =>
			option.setName('max')
					.setDescription('Set the maximum for the number generator.')
					.setRequired(true)),
	async execute(interaction) {
		let min = interaction.options.getInteger('min')
		let max =  interaction.options.getInteger('max')
		let number = Math.floor(Math.random() * max) + min;


		const mainEmbed = new EmbedBuilder()
		.setTitle('A random number has been generated')
		.setDescription('The number choosen was: \n' + number)
		.setColor('#2386ad');
		
		await interaction.reply({embeds: [mainEmbed]});
	}
}
