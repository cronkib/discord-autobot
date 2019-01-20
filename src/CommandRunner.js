const VALUE_COMMAND = "value";
const REDDIT_COMMAND = "reddit";

class CommandRunner {
	run(command, message, connection) {
		console.log(`Running command: ${command.type}`);

		switch(command.type) {
			case VALUE_COMMAND:
				this._runValueCommand(message, command);
				break;
			case REDDIT_COMMAND:
				this._runRedditCommand(message, connection.reddit, command);
				break;
		default:
			return;
		}
	}

	_runValueCommand(message, command) {
		message.reply(command.params.value);
	}

	_runRedditCommand(message, reddit, command) {
		reddit.getSubreddit(command.params.sub).getHot({
			limit: 50
		}).filter(post => post.post_hint === "image").then((posts) => {
			let i = Math.floor((Math.random() * posts.length));
			let p = posts[i];
			message.reply(p.url);
		});
	}

}

module.exports = exports = CommandRunner;