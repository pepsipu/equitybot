import './config/env';
import discord from 'discord.js';
import { token, prefix } from './config.json';
import commands from './cmds';

const client = new discord.Client();

client.on('ready', () => console.log('ready!'));

client.on('message', (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  const args = message.content.split(' ');
  const command = commands[args[0].substring(prefix.length)];
  if (command.constraint()) {
    command.command(client, message, args);
  }
});

client.login(token);
