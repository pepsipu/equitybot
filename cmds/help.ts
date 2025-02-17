import { Client, Message } from 'discord.js';
import { prefix } from '../config.json';

export default {
  name: 'help',
  constraint: (): boolean => true,
  command: async (client: Client, message: Message, args: string[]) => {
    message.channel.send('To look for recent tickers with Positive VWAP Divergence, type "as!positiveVWAP"\n'
      + 'To look for recent tickers that have Crossed above VWAP, type "as!crossVWAP"\n'
      + 'To look for recent tickers with Pre-market highs, type "as!PMhigh"\n'
      + 'To look for recent tickers with Market Cap(under 300mil), price(under 15), and pattern(wedge), type "as!screener"\n'
      + 'To look for recent tickers with Market Cap(under 300 mil), price(under 10), and lots of recent news, type "as!news 0 100"'
      + 'To look for recent tickers with an unusual 1 minute volume spike, type "as!volumespike"\n'
      + 'To look for recent tickers with unusual stockwits hype, type "as!sthype"\n'
      + 'To look for recent tickers with recent halts, type "as!halt"\n'
      + 'To look for recent tickers with Fibonacci 62%, type "as!62%fibonacci"');
  },
};
