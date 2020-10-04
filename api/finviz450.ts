import axios from 'axios';
import { Channel } from 'discord.js';

interface Ticker {
  ticker: string,
  price: string,
  volume: number,
}

/* finviz provides data in a comment */
const getFinvizTicksNews = async (idx: number, end: number): Promise<Ticker[]> => {
  const page = await axios.get(`https://finviz.com/screener.ashx?v=111&f=cap_microunder,sh_price_u10&r=${idx}`);
  const pageText: string = page.data;
  /* optimizable but the difference is so negligible it's not worth caring about */
  const rawTickers = pageText.substring(pageText.indexOf('<!-- TS') + 8, pageText.indexOf('TE -->') - 1);
  const tickers = rawTickers.split('\n').map((rawTicker) => {
    const tickerData = rawTicker.split('|');
    return {
      ticker: tickerData[0],
      price: tickerData[1],
      volume: +tickerData[2],
    };
  });
  if (idx + 20 > end) {
    return tickers;
  }
  return [...tickers, ...await getFinvizTicksNews(idx + 20, end)];
};

// eslint-disable-next-line import/prefer-default-export
export { getFinvizTicksNews };
