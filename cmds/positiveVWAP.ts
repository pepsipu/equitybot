import { Client, Message } from 'discord.js';
import { getTradeIdeasTickers } from '../api/tradeIdeas';

// @ts-ignore
export default {
  name: 'positiveVWAP',
  constraint: (): boolean => true,
  command: async (client: Client, message: Message, args: string[]) => {
    const vwapTicks = await getTradeIdeasTickers('https://www.trade-ideas.com/SingleAlertType/VDU/Positive_VWAP_Divergence.html');
    message.channel.send(vwapTicks.join('\n'));
  },
};
