# Command Guide

This guide explains how to add slash commands and text prefix commands to your Discord bot.

## Slash Commands

Slash commands are modern Discord commands that appear as autocomplete suggestions.

### Creating a Slash Command

1. Create a new file in `src/slashCommands/` directory:

```javascript
// src/slashCommands/utility/ping.js
export default {
  data: {
    name: 'ping',
    description: 'Replies with pong!',
  },
  async execute(interaction) {
    await interaction.reply(`Pong! Latency is ${Date.now() - interaction.createdTimestamp}ms.`);
  },
};
```

2. The command will be automatically registered by the slash command registerer.

### Advanced Slash Command Example

```javascript
import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('greet')
    .setDescription('Greet a user')
    .addUserOption(option =>
      option
        .setName('user')
        .setDescription('User to greet')
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    await interaction.reply(`Hello ${user}!`);
  },
};
```

## Text Prefix Commands

Prefix commands are traditional text-based commands that respond to a prefix.

### Creating a Prefix Command

1. Create a new file in `src/prefixCommands/` directory:

```javascript
// src/prefixCommands/utility/ping.js
export default {
  name: 'ping',
  aliases: ['p', 'latency'],
  description: 'Replies with pong!',
  async execute(message, args) {
    await message.reply(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms.`);
  },
};
```

2. The command will be automatically registered by the text command registerer.

## File Structure

Keep your commands organized:

```
src/
├── slashCommands/
│   ├── utility/
│   ├── moderation/
│   ├── fun/
│   └── admin/
└── prefixCommands/
    ├── utility/
    ├── moderation/
    ├── fun/
    └── admin/
```

## Command Naming Conventions

- Use kebab-case for command names: `my-command` not `MyCommand` or `my_command`
- Command file names should match their command name: `ping.js` for the `ping` command
- Group related commands in subdirectories by category

## Testing Commands

1. After creating a command, start your bot: `npm start`
2. The command should automatically register
3. In Discord, type your slash command or use your prefix followed by the command name
