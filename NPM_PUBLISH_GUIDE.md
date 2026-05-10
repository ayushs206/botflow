# Publishing to NPM

This guide helps you publish create-botflow to the NPM registry.

## Prerequisites

1. Create an account at [npmjs.com](https://www.npmjs.com)
2. Install Node.js and npm
3. Configure git with your GitHub account

## Steps

1. Ensure all tests pass and the code is ready
2. Update the version in `package.json`:
   ```bash
   npm version patch  # for bug fixes (1.0.0 -> 1.0.1)
   npm version minor  # for new features (1.0.0 -> 1.1.0)
   npm version major  # for breaking changes (1.0.0 -> 2.0.0)
   ```

3. Login to npm:
   ```bash
   npm login
   ```

4. Publish to npm:
   ```bash
   npm publish
   ```

5. Verify publication:
   ```bash
   npm info create-botflow
   ```

## After Publishing

Users can now create a new bot with:
```bash
npx create-botflow my-bot
cd my-bot
npm install
```

## Testing Before Publishing

Test locally:
```bash
npm link
create-botflow test-bot
cd test-bot
npm install
npm start
```

Then unlink:
```bash
npm unlink create-botflow -g
```

## Updating

To update after making changes:
1. Make your changes
2. Update `package.json` version
3. Commit and push to GitHub
4. Run `npm publish` again

The new version will be automatically available to users.
