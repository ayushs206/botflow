# Discord Bot

A Discord bot built with discord.js using the BotFlow template structure.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Add your Discord bot credentials:
   - `DISCORD_BOT_TOKEN` - Your bot token from Discord Developer Portal
   - `DISCORD_BOT_ID` - Your bot's application ID
   - `DISCORD_GUILD_ID` - Your Discord server ID (for testing)
   - `BOT_PREFIX` - Prefix for text commands (e.g., `!`)

## Running the Bot

Start in development mode with auto-reload:

```bash
npm start
```

Or use the watch mode:

```bash
npm run dev
```

## Project Structure

- `src/config/` - Configuration and environment setup
- `src/controllers/` - Business logic handlers
- `src/events/` - Event listeners
- `src/slashCommands/` - Slash commands
- `src/prefixCommands/` - Text prefix commands
- `src/registerers/` - Command registration logic
- `src/db/` - Database operations
- `src/utils/` - Helper utilities

## Adding Commands

See [COMMAND_GUIDE.md](../COMMAND_GUIDE.md) for detailed instructions on adding slash commands and text prefix commands.

## Resources

- [Discord.js Documentation](https://discord.js.org/)
- [Discord Developer Portal](https://discord.com/developers)
- [Discord API Documentation](https://discord.com/developers/docs)

## License

ISC
