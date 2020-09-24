import './config/env';
import discord from 'discord.js';
import { getFinvizTicks } from './api/finviz';

const client = new discord.Client();
getFinvizTicks(0).then(console.log);
