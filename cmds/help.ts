import { Client, Message } from 'discord.js';

export default {
  name: 'help',
  constraint: (): boolean => true,
  command: async (client: Client, message: Message, args: string[]) => {
    message.channel.send('To look for recent tickers with Positive VWAP Divergence, type "!positiveVWAP"\n'
      + 'To look for recent tickers that have Crossed above VWAP, type "!crossVWAP"\n'
      + 'To look for recent tickers with Pre-market highs, type "!PMhigh"\n'
      + 'To look for recent tickers with Market Cap(under 300mil), price(under 15), and pattern(wedge), type "!screener"\n'
      + 'To look for recent tickers with Market Cap(under 300 mil), price(under 10), and lots of recent news, type "!news 0 100"');
  },
};
