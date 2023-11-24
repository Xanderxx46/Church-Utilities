// Reqiurements
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN;
const { Collection } = require('discord.js')
// Intents
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
client.commands = new Collection();
// Log when ready
client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}!`);

	const statuses = [
		'Xander Break Things',
		'Xander Sleep',
		'You Use My Commands'
	];

	setInterval(() => {
		const activity = statuses[Math.floor(Math.random() * statuses.length)];
		client.user.setPresence({
			activities: [{ name: `${activity}`, type: ActivityType.Watching }],
			status: 'dnd',
		  });
		console.log(activity)
	}, 15000);
});

// Commands 
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, async (...args) => await event.execute(...args));
	} else {
		client.on(event.name, async (...args) => await event.execute(...args));
	}
}

client.login(token);
