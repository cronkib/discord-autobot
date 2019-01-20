const ApplicationProperties = require("./model/ApplicationProperties")
const Command = require("./Command");

class MessageReader {
	read(message) {
		if (message.cleanContent.length > 50) {
			return;
		}

		let content = this._extractMessageContent(message);

		if (!this._isBotCommand(content)) {
			return;
		}

		let commandDefinition = this._matchCommandToDefinition(content);
		return new Command(message, commandDefinition);
	}

	_matchCommandToDefinition(content) {
		let requestedCommand = content[1].substring(1);
		return ApplicationProperties.data.commands.filter(commandDef => commandDef.name === requestedCommand)[0];
	}

	_isBotCommand(content) {
		if (content.length !== 2) {
			return false;
		}

		let botReferenceIndex = this._findBotReference(content);
		let referencesBot = botReferenceIndex > -1;
		let commandIsOrdered = botReferenceIndex === 0;

		if (!referencesBot || !commandIsOrdered) {
			return false;
		}

		return this._isValidCommand(content[1]);
	}

	_findBotReference(content) {
		return content.indexOf(`@${ApplicationProperties.data.botname}`);
	}

	_isValidCommand(command) {
		if (command.indexOf("!") < 0) {
			return false;
		}
		let validCommands = ApplicationProperties.data.commands.map(commandDef => this._compileCommandName(commandDef.name));
		return validCommands.includes(command);
	}

	_extractMessageContent(message) {
		return message.cleanContent.split(" ");
	}

	_compileCommandName(name) {
		return `!${name}`;
	}
}

module.exports = exports = MessageReader;