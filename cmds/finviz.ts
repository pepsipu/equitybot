import { Client, Message } from 'discord.js';
import { getFinvizTicks } from '../api/finviz';

export default {
  name: 'screener',
  constraint: (): boolean => true,
  command: async (client: Client, message: Message, args: string[]) => {
    message.channel.send('fetching raw ticks...');
    const ticks = await getFinvizTicks(0);
    ticks.sort((a, b) => b.volume - a.volume);
    const content = ticks.map((tick) => `${tick.ticker} vol. ${tick.volume} $${tick.price}`).join('\n').substring(0, 2000);
    message.channel.send(content.substring(0, content.lastIndexOf('\n')));
  },
};
