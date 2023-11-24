const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

let number = Math.floor(Math.random() * 10) + 1;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Slap the person of your choosing.')
		.addUserOption(option =>
            option.setName('user')
				.setDescription('Who should be slapped?')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('user')
		const userId = user?.id
		const commandUser = interaction.user
		const commandUserId = commandUser?.id
		let number = Math.floor(Math.random() * 10) + 1;
		// Slap 1
		const slap1 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/Ws6Dm1ZW_vMAAAAC/girl-slap.gif');

		const slap2 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/eU5H6GbVjrcAAAAC/slap-jjk.gif');

		const slap3 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/XiYuU9h44-AAAAAC/anime-slap-mad.gif');

		const slap4 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/Sv8LQZAoQmgAAAAC/chainsaw-man-csm.gif');

		const slap5 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/EfhPfbG0hnMAAAAC/slap-handa-seishuu.gif');

		const slap6 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/qvvKGZhH0ysAAAAC/anime-girl.gif');

		const slap7 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/ZozZrvtEdAkAAAAC/slap.gif');

		const slap8 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/E3OW-MYYum0AAAAC/no-angry.gif');

		const slap9 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/yJmrNruFNtEAAAAC/slap.gif');

		const slap10 = new EmbedBuilder()
		.setTitle('Get Slapped!')
		.setDescription('<@'+userId+'> has been slapped by <@'+commandUserId+'>')
		.setColor('#fc4903')
		.setImage('https://media.tenor.com/nVvUhW4FBxcAAAAd/slap.gif');
		
		if(number == 1){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap1]});
		}
		if(number == 2){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap2]});
		}
		if(number == 3){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap3]});
		}
		if(number == 4){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap4]});
		}
		if(number == 5){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap5]});
		}
		if(number == 6){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap6]});
		}
		if(number == 7){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap7]});
		}
		if(number == 8){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap8]});
		}
		if(number == 9){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap9]});
		}
		if(number == 10){
			let number = Math.floor(Math.random() * 10) + 1;
			await interaction.reply({embeds: [slap10]});
		}
	}
};

