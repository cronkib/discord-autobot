const ApplicationProperties = require("./model/ApplicationProperties");
const MessageReader = require("./MessageReader");
const CommandRunner = require("./CommandRunner");

const MESSAGE_EVENT = "message";

class Autobot {
	constructor(connection) {
		this.connection = connection;
		this.messageReader = new MessageReader();
		this.commandRunner = new CommandRunner();
	}

	startReceiving() {
		this.connection.discord.on(MESSAGE_EVENT, (message) => {
			let command = this.messageReader.read(message);

			if (command) {
				this.commandRunner.run(command, message, this.connection);
			}
		});
		console.log(`${ApplicationProperties.data.botname} is now receiving messages!`);
	}
}

module.exports = exports = Autobot;