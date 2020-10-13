import { Client, Message } from 'discord.js';
import { getTradeIdeasTickers } from '../api/tradeIdeas';

// @ts-ignore
export default {
  name: 'PMhigh',
  constraint: (): boolean => true,
  command: async (client: Client, message: Message, args: string[]) => {
    const vwapTicks = await getTradeIdeasTickers('https://www.trade-ideas.com/SingleAlertType/HPRE/Pre-market_highs.html');
    message.channel.send(vwapTicks.join('\n'));
  },
};
