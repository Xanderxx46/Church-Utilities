const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll-dice')
		.setDescription('Role either 1, 2, or 3 dice.')
        .addStringOption(option =>
            option.setName('numberdice')
                .setDescription('How many dice should be rolled?')
                .setRequired(true)
                .addChoices(
                    { name: '1 Dice', value: '1' },
                    { name: '2 Die', value: '2' },
					{ name: '3 Die', value: '3' },
                )),
	async execute(interaction) {
		let dice1 = Math.floor(Math.random() * 6) + 1;
		let dice2 = Math.floor(Math.random() * 12) + 2;
		let dice3 = Math.floor(Math.random() * 18) + 3;
		let diceNumber = interaction.options.getString('numberdice')

		const dice1Embed = new EmbedBuilder()
		.setTitle('You rolled 1 dice.')
		.setDescription('Your number is: \n' + dice1)
		.setColor('#196b3c');

		const dice2Embed = new EmbedBuilder()
		.setTitle('You rolled 2 die.')
		.setDescription('Your number is: \n' + dice2)
		.setColor('#196b3c');

		const dice3Embed = new EmbedBuilder()
		.setTitle('You rolled 3 die.')
		.setDescription('Your number is: \n' + dice3)
		.setColor('#196b3c');
		
		if(diceNumber == 1){
			await interaction.reply({embeds: [dice1Embed]});
		}
		if(diceNumber == 2){
			await interaction.reply({embeds: [dice2Embed]});
		}
		if(diceNumber == 3){
			await interaction.reply({embeds: [dice3Embed]});
		}
	},
};
