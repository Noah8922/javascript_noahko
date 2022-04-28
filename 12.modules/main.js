import { increase, getCount } from "./counter.js";
/** import increase1 from './counter.js', export default 일때 */
/** import {increase as increase1} from "./counter.js";, export인데 이름을 바꾸고 싶을 때 */

increase(); /** increase1() */
increase(); /** increase1() */
increase(); /** increase1() */
const count = getCount();
console.log(count);

/** improt * as counter from './counter.js', 그룹화임, 한꺼번에 가져올 때 */
/**
 * 
counter.increase();
counter.increase();
counter.increase();
const count = getCount();
console.log(counter.count);
 */
