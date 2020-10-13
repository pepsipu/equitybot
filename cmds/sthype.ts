import { Client, Message } from 'discord.js';
import { getTradeIdeasTickers } from '../api/tradeIdeas';

// @ts-ignore
export default {
  name: 'sthype',
  constraint: (): boolean => true,
  command: async (client: Client, message: Message, args: string[]) => {
    const vwapTicks = await getTradeIdeasTickers('https://www.trade-ideas.com/SingleAlertType/STAS/StockTwits_activity_spike.html');
    message.channel.send(vwapTicks.join('\n'));
  },
};
