import axios from 'axios';
import {routes} from './routes';

const CallHandle = async (method, title, state) => {
  let site = state.site ? state.site : '';
  let email = state.email ? state.email : '';
  let res = await axios.get(routes.formHandle +
    '?method=' + method +
    '&name=' + state.name +
    '&phone=' + state.phone +
    '&site=' + site +
    '&email=' + email +
    '&title=' + title);
  
  return res.data.status === 'ok';
};

export {CallHandle};