import './side/a.js';
import './side/b.js';
import './side/c.js';
import './side/d.js';
import './side/e.js';
import './side/f.js';
import './side/g.js';

import {fn as fnA} from './without_side/a.js';
import {fn as fnB} from './without_side/b.js';
import {fn as fnC} from './without_side/c.js';
import {fn as fnD} from './without_side/d.js';
import {fn as fnE} from './without_side/e.js';
import {fn as fnF} from './without_side/f.js';
import {fn as fnG} from './without_side/g.js';

const app = () => {
  console.log('\n==== Without side effects ====\n');
  fnB();
  fnA();
  setTimeout(fnC, 1);

  fnG();
  fnE();
  fnF();
  fnD();
};
app();
