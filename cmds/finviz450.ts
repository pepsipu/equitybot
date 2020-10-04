import { Client, Message } from 'discord.js';
import { getFinvizTicksNews } from '../api/finviz450';
import { checkNewsConstraint } from '../api/getNewsForTickFinviz';

// @ts-ignore
export default {
  name: 'news',
  constraint: (): boolean => true,
  command: async (client: Client, message: Message, args: string[]) => {
    message.channel.send('fetching ticks...');
    const start = +args[1];
    const end = +args[2];
    const ticks = (await getFinvizTicksNews(start, end)).slice(0, end);
    ticks.sort((a, b) => b.volume - a.volume);
    ticks.forEach((tick, idx) => {
      checkNewsConstraint(tick.ticker).then((newsGood) => {
        if (newsGood) {
          message.channel.send(`${tick.ticker} vol. ${tick.volume} $${tick.price}`);
        }
        if (idx === ticks.length - 1) {
          message.channel.send('done fetching ticks');
        }
      });
    });
  },
};
