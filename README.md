# discord-autobot #
A simple bot for discord that connects with Reddit.

## Overview ##

Bots are configured in config.yml.

**botname**: Make this the bot's name as it was setup in your Discord app profile. 

**commands**: Defines a list of all the supported commands and how to handle them.

### Commands ###

Commands have the following fields:

 - **name**: Corresponds to the command as it should be used from Discord. All commands are prefixed with '!' and are case sensitive.
 - **type**: Specifies the expected behaviour of the command.
 - **params**: A list of parameters that are to be passed to the command. This parameter list is type-specific, meaning that the params for a *value* command are expected to be different than a *reddit* command.
 
There are currently only two types of commands that are supported:

 - **value**: Returns the contents of *params.value* to 
 - **reddit**: Looks up the top 50 hot posts of *params.sub* and replies with a random image url.
 
## Prerequisites ##
 - nodejs
 - npm
 - a discord bot account
 - a reddit bot account
 
## Setup ##

**Building**

```bash
cd discord-autobot
npm install
```

**Setting up the environment**

Create an environment file named *.env* in the project's working directory.

The following environment variables are required:

- DISCORD_TOKEN
- REDDIT_USER_AGENT
- REDDIT_CLIENT_ID
- REDDIT_CLIENT_SECRET
- REDDIT_USERNAME
- REDDIT_PASSWORD

## Running ##

```bash
node app.js
```

Or preferrably, launch with a processor manager like *forever*:

```bash
npm install forever -g
forever start app.js
```
