import finviz from './finviz';
import finviz450 from './finviz450';
import positiveVWAP from './positiveVWAP';
import crossVWAP from './crossVWAP';
import PMhigh from './PMhigh';
import help from './help';

export default {
  [finviz.name]: finviz,
  [finviz450.name]: finviz450,
  [positiveVWAP.name]: positiveVWAP,
  [crossVWAP.name]: crossVWAP,
  [PMhigh.name]: PMhigh,
  [help.name]: help,
};
