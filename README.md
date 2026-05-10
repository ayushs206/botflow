# BotFlow

A professional Discord bot template with a clean, scalable file structure. Scaffold new Discord bot projects instantly with a single command.

## Installation

Create a new Discord bot project with:

```bash
npx create-botflow my-bot-name
cd my-bot-name
npm install
```

## Project Structure

```
src/
├── index.js                 # Entry point
├── botClient.js             # Bot client initialization
├── config/
│   ├── config.js            # Configuration settings
│   └── env.js               # Environment variables setup
├── controllers/             # Business logic handlers
│   ├── client.ready.js
│   ├── interaction.create.js
│   └── message.create.js
├── events/                  # Event handlers
│   ├── client.ready.js
│   ├── interaction.create.js
│   └── message.create.js
├── prefixCommands/          # Text prefix commands
│   └── utility/
│       └── help.js
├── slashCommands/           # Slash commands
│   └── utility/
│       └── help.js
├── registerers/             # Command registration
│   ├── slash.register.js
│   └── text.register.js
├── db/                      # Database management
│   ├── database.json
│   └── manager.js
└── utils/                   # Helper utilities
    └── generalHelper.js
```

## Quick Start

1. Clone or create your project:
   ```bash
   npx create-botflow my-discord-bot
   cd my-discord-bot
   npm install
   ```

2. Configure your environment:
   ```bash
   cp .env.example .env
   ```

3. Add your Discord bot token and other credentials to `.env`

4. Start the bot:
   ```bash
   npm start
   ```

## Dependencies

- **discord.js** - Discord API client
- **dotenv** - Environment variable management
- **axios** - HTTP client
- **nodemon** - Development auto-reload

## Configuration

Edit `src/config/config.js` to customize:
- Bot prefix
- Database settings
- Command options

## Development

Start development mode with auto-reload:

```bash
npm start
```

## Adding Commands

### Slash Commands

Create a new file in `src/slashCommands/` with your command structure:

```javascript
export default {
  data: {
    name: 'command-name',
    description: 'Command description',
  },
  async execute(interaction) {
    await interaction.reply('Response text');
  },
};
```

### Text Prefix Commands

Create a new file in `src/prefixCommands/` with similar structure.

## Database

The template includes a basic file-based database system. Extend `src/db/manager.js` to add custom data operations.

## License

ISC

## Author

[ayushs206](https://github.com/ayushs206)

## Support

For issues and questions, visit the GitHub repository.
