import finviz from './finviz';
import finviz450 from './finviz450';
import positiveVWAP from './positiveVWAP';
import crossVWAP from './crossVWAP';
import PMhigh from './PMhigh';
import help from './help';
import volumespike from './volumespike';
import halt from './halt';
import fibonacci from './fibonacci';

export default {
  [finviz.name]: finviz,
  [finviz450.name]: finviz450,
  [positiveVWAP.name]: positiveVWAP,
  [crossVWAP.name]: crossVWAP,
  [PMhigh.name]: PMhigh,
  [help.name]: help,
  [volumespike.name]: volumespike,
  [halt.name]: halt,
  [fibonacci.name]: fibonacci,
};
