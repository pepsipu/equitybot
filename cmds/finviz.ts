import { Client, Message, MessageAttachment } from 'discord.js';
import { getFinvizTicks } from '../api/finviz';

export default {
  name: 'screener',
  constraint: (): boolean => true,
  command: async (client: Client, message: Message, args: string[]) => {
    message.channel.send('fetching raw ticks...');
    const ticks = await getFinvizTicks(0);
    switch (args[1]) {
      case 'raw': {
        const contents = ticks.map((tick) => `tick: ${tick[0]} price: ${tick[1]} volume: ${tick[2]}`).join('\n');
        const attachment = new MessageAttachment(Buffer.from(contents), 'ticks.txt');
        message.channel.send(attachment);
        break;
      }
      case 'visual':
      default:
        message.channel.send('unrecognized tick fetch type');
    }
  },
};
