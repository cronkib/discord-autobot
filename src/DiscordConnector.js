const Discord = require("discord.js");
const Connector = require("./Connector");
const AuthenticationProperties = require("./model/AuthenticationProperties")
const Connection = require("./model/Connection");

class DiscordConnector extends Connector {
	constructor(reddit) {
		super();
		this.reddit = reddit;
		this.client = new Discord.Client();
	}

	connect() {
		return new Promise((resolve, reject) => {
			try {
				let client = this.client;
				client.login(AuthenticationProperties.getDiscordToken());
				client.on("ready", () => {
					resolve(new Connection(client, this.reddit));
				});
			}
			catch (error) {
				reject(error);
			}
		});
	}
}

module.exports = exports = DiscordConnector;