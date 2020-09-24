import axios from 'axios';

/* finviz provides data in a comment */
const getFinvizTicks = async (idx: number): Promise<string[][]> => {
  const page = await axios.get(`https://finviz.com/screener.ashx?v=111&f=cap_microunder,sh_price_u15,ta_pattern_wedge&ft=4&r=${idx}`);
  const pageText: string = page.data;
  /* optimizable but the difference is so negligible it's not worth caring about */
  const rawTickers = pageText.substring(pageText.indexOf('<!-- TS') + 8, pageText.indexOf('TE -->') - 1);
  const tickers = rawTickers.split('\n').map((rawTicker) => rawTicker.split('|'));
  if (tickers.length !== 20) {
    return tickers;
  }
  return [...tickers, ...await getFinvizTicks(idx + 20)];
};

// eslint-disable-next-line import/prefer-default-export
export { getFinvizTicks };
