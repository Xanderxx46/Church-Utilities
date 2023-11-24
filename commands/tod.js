var { SlashCommandBuilder } = require('discord.js');
const { default: fetch } = import('node-fetch');
const { EmbedBuilder } = require('discord.js')

let truthnumber = Math.floor(Math.random() * 10) + 1;
let darenumber = Math.floor(Math.random() * 10) + 1;


const truth1 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('What is the most embarrassing moment of your life?')
.setColor('#2521ff');

const truth2 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('What is something you still hide from your parents/guardian?')
.setColor('#2521ff');

const truth3 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('What/who do you like most in the world?')
.setColor('#2521ff');

const truth4 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('What is your favorite candy?')
.setColor('#2521ff');

const truth5 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('What is your favorite game?')
.setColor('#2521ff');

const truth6 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('Where does your Discord name come from?')
.setColor('#2521ff');

const truth7 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('How are you today?')
.setColor('#2521ff');

const truth8 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('Do you prefer cats or dogs?')
.setColor('#2521ff');

const truth9 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('When did you first get a phone?')
.setColor('#2521ff');

const truth10 = new EmbedBuilder()
.setTitle('Truth')
.setDescription('How many Discord servers are you in?\\nUse https://discordtools.io to help find out!')
.setColor('#2521ff');

const dare1 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('Show your last 3 DM Messages.')
.setColor('#fc7f03');

const dare2 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('Send your most embarresing screenshot/image.')
.setColor('#fc7f03');

const dare3 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('Post your last 5 people you dmed.')
.setColor('#fc7f03');

const dare4 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('Send the 😩 to your best friend.')
.setColor('#fc7f03');

const dare5 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('Recommend this bot to 5 of your friends.')
.setColor('#fc7f03');

const dare6 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('Text your ex.')
.setColor('#fc7f03');

const dare7 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('Face reveal to one person in your group. (If comfortable)')
.setColor('#fc7f03');

const dare8 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('DM Xander saying you love this bot.')
.setColor('#fc7f03');

const dare9 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('Spam ping one person in your group.')
.setColor('#fc7f03');

const dare10 = new EmbedBuilder()
.setTitle('Dare')
.setDescription('Send your funniest meme.')
.setColor('#fc7f03');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('truth-or-dare')
		.setDescription('Get a truth or dare.')
        .addStringOption(option =>
            option.setName('truthordare')
                .setDescription('Truth or dare?')
                .setRequired(true)
                .addChoices(
                    { name: 'Truth', value: 'truth' },
                    { name: 'Dare', value: 'dare' },
                )),
	async execute(interaction) {
        const truthordare = interaction.options.getString('truthordare')
        if(truthordare == "truth"){
            truthnumber = Math.floor(Math.random() * 10) + 1;
            if (truthnumber == 1){
                await interaction.reply({embeds: [truth1]});
            }
            if (truthnumber == 2){
                await interaction.reply({embeds: [truth2]});
            }
            if (truthnumber == 3){
                await interaction.reply({embeds: [truth3]});
            }
            if (truthnumber == 4){
                await interaction.reply({embeds: [truth4]});
            }
            if (truthnumber == 5){
                await interaction.reply({embeds: [truth5]});
            }
            if (truthnumber == 6){
                await interaction.reply({embeds: [truth6]});
            }
            if (truthnumber == 7){
                await interaction.reply({embeds: [truth7]});
            }
            if (truthnumber == 8){
                await interaction.reply({embeds: [truth8]});
            }
            if (truthnumber == 9){
                await interaction.reply({embeds: [truth9]});
            }
            if (truthnumber == 10){
                await interaction.reply({embeds: [truth10]});
            }
        }
        if(truthordare == "dare"){
            darenumber = Math.floor(Math.random() * 10) + 1;
            if (darenumber == 1){
                await interaction.reply({embeds: [dare1]});
            }
            if (darenumber == 2){
                await interaction.reply({embeds: [dare2]});
            }
            if (darenumber == 3){
                await interaction.reply({embeds: [dare3]});
            }
            if (darenumber == 4){
                await interaction.reply({embeds: [dare4]});
            }
            if (darenumber == 5){
                await interaction.reply({embeds: [dare5]});
            }
            if (darenumber == 6){
                await interaction.reply({embeds: [dare6]});
            }
            if (darenumber == 7){
                await interaction.reply({embeds: [dare7]});
            }
            if (darenumber == 8){
                await interaction.reply({embeds: [dare8]});
            }
            if (darenumber == 9){
                await interaction.reply({embeds: [dare9]});
            }
            if (darenumber == 10){
                await interaction.reply({embeds: [dare10]});
            }
        }

	},
};