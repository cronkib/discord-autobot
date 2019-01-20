let fs = require("fs");
let yaml = require("js-yaml");

class Config {
	constructor(data) {
		this.data = data;
	}

	getBotName() {
		return this.data.botname;
	}

	getCommands() {
		return this.data.commands;
	}

	isRedditEnabled() {
		return this.data.redditEnabled;
	}
}

let configData = yaml.safeLoad(fs.readFileSync("./config.yml", "utf8"));
module.exports = exports = new Config(configData);