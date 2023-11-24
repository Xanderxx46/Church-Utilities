
const { REST, Routes } = require('discord.js');
require('dotenv').config();
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.TOKEN;

const fs = require('node:fs');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Turn the slashCommandBuilder to json
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

// Deploy the cmds.
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// Register them globally
		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log(`Success! ✔ reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// Catch and log errors.
		console.error(`${error}`);
	}
})();
