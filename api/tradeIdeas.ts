import axios from 'axios';

/* finviz provides data in a comment */
const getTradeIdeasTickers = async (url: string): Promise<string[]> => {
  const page = await axios.get(url);
  const pageText: string = page.data;
  /* optimizable but the difference is so negligible it's not worth caring about */
  const rawTickers = pageText.substring(pageText.indexOf('<TABLE BORDER=3>') + 16, pageText.indexOf('</TABLE>') - 1);
  const tickElements = rawTickers.split('\n').slice(2).map((tick) => {
    const w = tick.split('"');
    return w[1].split('=')[1];
  });
  return tickElements;
};

// eslint-disable-next-line import/prefer-default-export
export { getTradeIdeasTickers };
