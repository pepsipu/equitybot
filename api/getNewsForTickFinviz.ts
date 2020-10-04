import axios from 'axios';

interface Ticker {
  ticker: string,
  price: string,
  volume: number,
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'];

/* finviz provides data in a comment */
const checkNewsConstraint = async (tick: string): Promise<boolean> => {
  const page = await axios.get(`https://finviz.com/quote.ashx?t=${tick}&ty=c&p=d&b=1`);
  const pageText: string = page.data;
  /* ecks dee speed */
  const newsDates = (pageText.match(/p">[A-Z][a-z][a-z]-[0-9][0-9]-[0-9][0-9]/g) || []).map((s) => {
    const [month, day, year] = s.slice(3).split('-');
    return {
      month,
      day,
      year: +`20${year}`,
    };
  });
  const today = new Date();
  const todayMonth = months[today.getMonth()];
  const todayYear = today.getFullYear();
  // eslint-disable-next-line max-len
  const thisMonth = newsDates.filter((date) => date.month === todayMonth && date.year === todayYear);
  today.setMonth(today.getMonth() - 1);
  const lastMonthS = months[today.getMonth()];
  const lastMonthYear = today.getFullYear();
  const lastMonth = newsDates.filter((date) => date.month === lastMonthS && date.year === lastMonthYear);
  return thisMonth.length === 0 && lastMonth.length >= 2;
};

// eslint-disable-next-line import/prefer-default-export
export { checkNewsConstraint };
