class Command {
	constructor(message, definition) {
		this.message = message;
		this.name = definition.name;
		this.type = definition.type;
		this.params = definition.params;
	}
}

module.exports = exporst = Command;