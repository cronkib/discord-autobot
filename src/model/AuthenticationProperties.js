class Authentication {
	constructor() {
		this.discordToken = process.env.DISCORD_TOKEN;
		this.redditUserAgent = process.env.REDDIT_USER_AGENT;
		this.redditClientId = process.env.REDDIT_CLIENT_ID;
		this.redditClientSecret = process.env.REDDIT_CLIENT_SECRET;
		this.redditUsername = process.env.REDDIT_USERNAME;
		this.redditPassword = process.env.REDDIT_PASSWORD;
	}

	getDiscordToken() {
		return this.discordToken;
	}

	getRedditUserAgent() {
		return this.redditUserAgent;
	}

	getRedditClientId() {
		return this.redditClientId;
	}

	getRedditClientSecret() {
		return this.redditClientSecret
	}

	getRedditUsername() {
		return this.redditUsername;
	}

	getRedditPassword() {
		return this.redditPassword;
	}
}

module.exports = exports = new Authentication();