const Snoowrap = require("snoowrap");
const Connector = require("./Connector");
const ApplicationProperties = require("./model/ApplicationProperties");
const AuthenticationProperties = require("./model/AuthenticationProperties")

class RedditConnector extends Connector {
	connect() {
		return new Promise((resolve, reject) => {
			try {
				let reddit = new Snoowrap({
					userAgent: AuthenticationProperties.getRedditUserAgent(),
					clientId: AuthenticationProperties.getRedditClientId(),
					clientSecret: AuthenticationProperties.getRedditClientSecret(),
					username: AuthenticationProperties.getRedditUsername(),
					password: AuthenticationProperties.getRedditPassword()
				});
				resolve(reddit);
			}
			catch (error) {
				reject(error);
			}
		});
	}
}

module.exports = exports = RedditConnector;