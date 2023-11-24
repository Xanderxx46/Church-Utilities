const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('hug the person of your choosing.')
		.addUserOption(option =>
            option.setName('user')
				.setDescription('Who should be hugged?')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('user')
		const userId = user?.id
		const commandUser = interaction.user
		const commandUserId = commandUser?.id
		let number = Math.floor(Math.random() * 10) + 1;
		// Hugs!
		const hug1 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/kCZjTqCKiggAAAAC/hug.gif');

		const hug2 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/H7i6GIP-YBwAAAAd/a-whisker-away-hug.gif');

		const hug3 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/7oCaSR-q1kkAAAAC/alice-vt.gifhttps://media.tenor.com/7oCaSR-q1kkAAAAC/alice-vt.gif');

		const hug4 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif');

		const hug5 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/MtmdE7YibpkAAAAC/hestia-hug.gif');

		const hug6 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/IpGw3LOZi2wAAAAC/hugtrip.gif');

		const hug7 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/uiak6BECN_sAAAAC/emunene-emu.gif');

		const hug8 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/7f9CqFtd4SsAAAAC/hug.gif');

		const hug9 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/pqXmHpbIy0MAAAAd/anime-anime-hug.gif');

		const hug10 = new EmbedBuilder()
		.setTitle('Get hugged!')
		.setDescription('<@'+userId+'> has been hugged by <@'+commandUserId+'>')
		.setColor('#f774ad')
		.setImage('https://media.tenor.com/mB_y2KUsyuoAAAAd/cuddle-anime-hug.gif');
		
		if(number == 1){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug1]});
		}
		if(number == 2){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug2]});
		}
		if(number == 3){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug3]});
		}
		if(number == 4){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug4]});
		}
		if(number == 5){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug5]});
		}
		if(number == 6){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug6]});
		}
		if(number == 7){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug7]});
		}
		if(number == 8){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug8]});
		}
		if(number == 9){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug9]});
		}
		if(number == 10){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [hug10]});
		}
	}
};

