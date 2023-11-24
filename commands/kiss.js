const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('Kiss the person of your choosing.')
		.addUserOption(option =>
            option.setName('user')
				.setDescription('Who should be kissed?')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('user')
		const userId = user?.id
		const commandUser = interaction.user
		const commandUserId = commandUser?.id
		let number = Math.floor(Math.random() * 10) + 1;
		// Kisses
		const kiss1 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/BZyWzw2d5tAAAAAC/hyakkano-100-girlfriends.gif');

		const kiss2 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/ye6xtORyw_8AAAAC/2.gif');

		const kiss3 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/Y2AdPDiQoK8AAAAC/kiss-love.gif');

		const kiss4 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/9u2vmryDP-cAAAAC/horimiya-animes.gif');

		const kiss5 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/XXPkLLIct-8AAAAC/kiss-cuddles.gif');

		const kiss6 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/EjHfImhsk5AAAAAC/kiss-kissing.gif');

		const kiss7 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/8WtQGgi-K2sAAAAC/jura-vandread.gif');

		const kiss8 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/mNPxG38pPV0AAAAC/kiss-love.gif');

		const kiss9 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/HJLEYgQcvEAAAAAd/yosuga-no-sora-kiss.gif');

		const kiss10 = new EmbedBuilder()
		.setTitle('Kissy Kissy')
		.setDescription('<@'+userId+'> has been kissed by <@'+commandUserId+'>')
		.setColor('#6b1919')
		.setImage('https://media.tenor.com/OpoMUqfR7ysAAAAd/shirayuki-zen-kiss-anime.gif');
		
		if(number == 1){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss1]});
		}
		if(number == 2){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss2]});
		}
		if(number == 3){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss3]});
		}
		if(number == 4){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss4]});
		}
		if(number == 5){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss5]});
		}
		if(number == 6){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss6]});
		}
		if(number == 7){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss7]});
		}
		if(number == 8){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss8]});
		}
		if(number == 9){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss9]});
		}
		if(number == 10){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [kiss10]});
		}
	}
};

