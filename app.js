require("dotenv").load();

const DiscordConnector = require("./src/DiscordConnector");
const RedditConnector = require("./src/RedditConnector");
const Autobot = require("./src/Autobot");

new RedditConnector().connect().then((reddit) => {
		console.log("Connection to Reddit established.")
		return new DiscordConnector(reddit).connect();
	}).then((connection) => {
		console.log("Connection to Discord established.")
		new Autobot(connection).startReceiving();
	}).catch((error) => {
		console.log(error);
	});
