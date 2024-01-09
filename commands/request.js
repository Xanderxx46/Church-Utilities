const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

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
        const logEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Someone has requested a role.')
        .setDescription(`User **<@${commandUserId}>** has requested a role. \n\n The name: **${name}**`)
        const requestedEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Request Sent')
        .setDescription(`You have requested a role, it will be reviewed soon.`)

        const approveEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Request Approved')
        .setDescription(`Your request has been approved!\n\n You should have a role called **${name}** now!`)
        const denyEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Request Denied')
        .setDescription(`Your request has been denied.`)
        const approve = new ButtonBuilder()
        .setCustomId('approve')
        .setLabel('Approve')
        .setEmoji('<:check:1157132510459859026>')
        .setStyle(ButtonStyle.Success);

         const deny = new ButtonBuilder()
        .setCustomId('deny')
        .setLabel('Deny')
        .setEmoji('<:xx:1041028680832536597>')
        .setStyle(ButtonStyle.Danger);
    
        const row = new ActionRowBuilder()
        .addComponents(approve, deny);    

            await interaction.reply({
                embeds: [requestedEmbed],
            });
            var number = 12
            const response = await interaction.guild.channels.cache.get('1157132118464405574').send({
                
                embeds: [logEmbed],
                content: '<@829909201262084096>',
                components: [row]
            })
            const confirmation = await response.awaitMessageComponent();

            if (confirmation.customId === 'approve') {
                await confirmation.update({embed: [approveEmbed]});
                await confirmation.followUp('Accepted!');
                await interaction.user.send({embeds: [approveEmbed]})
                await interaction.guild.roles.create({
                    name: `${name}`, 
                    reason: 'Custom Role Request',
                    setPosition: 15
                  })
                number = number +1
                  const role = interaction.guild.roles.cache.find(role => role.name === `${name}`);
                  await interaction.guild.roles.setPosition(role, number)
                  await interaction.member.roles.add(role)
                  row.components[0].setDisabled(true)
                  row.components[1].setDisabled(true)
            } else if (confirmation.customId === 'deny') {
                await confirmation.update({ embed: [denyEmbed] });
                await confirmation.followUp('Denied.');
                await interaction.user.send({embeds: [denyEmbed]})

                row.components[0].setDisabled(true)
                row.components[1].setDisabled(true)
            }
        
        }
    };
