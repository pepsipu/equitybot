import { Client, Message } from 'discord.js';
import { getTradeIdeasTickers } from '../api/tradeIdeas';

// @ts-ignore
export default {
  name: '62%fibonacci',
  constraint: (): boolean => true,
  command: async (client: Client, message: Message, args: string[]) => {
    const vwapTicks = await getTradeIdeasTickers('https://www.trade-ideas.com/SingleAlertType/FU62/Fibonacci_62%25_buy_signal.html');
    message.channel.send(vwapTicks.join('\n'));
  },
};
