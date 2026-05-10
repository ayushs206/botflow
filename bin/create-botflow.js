#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templateDir = path.join(__dirname, '..', 'template');
const projectName = process.argv[2] || 'my-discord-bot';
const projectPath = path.resolve(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`Error: Directory "${projectName}" already exists.`);
  process.exit(1);
}

try {
  console.log(`Creating new Discord bot project in ${projectPath}...`);
  
  fs.mkdirSync(projectPath, { recursive: true });
  
  copyDirectorySync(templateDir, projectPath);
  
  if (fs.existsSync(path.join(projectPath, '.git'))) {
    fs.rmSync(path.join(projectPath, '.git'), { recursive: true, force: true });
  }
  
  if (fs.existsSync(path.join(projectPath, 'node_modules'))) {
    fs.rmSync(path.join(projectPath, 'node_modules'), { recursive: true, force: true });
  }
  
  const packageJsonPath = path.join(projectPath, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.name = projectName;
  packageJson.version = '1.0.0';
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  
  console.log(`Project created successfully!`);
  console.log(`\nNext steps:`);
  console.log(`  cd ${projectName}`);
  console.log(`  npm install`);
  console.log(`  cp .env.example .env`);
  console.log(`  npm start`);
} catch (error) {
  console.error('Error creating project:', error.message);
  if (fs.existsSync(projectPath)) {
    fs.rmSync(projectPath, { recursive: true, force: true });
  }
  process.exit(1);
}

function copyDirectorySync(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const files = fs.readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destinationPath = path.join(destination, file);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectorySync(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}
