import axios from 'axios';
import { api_url } from '../../../common/config';

axios.defaults.withCredentials = true;

export default class {
  static createPointer = (data) => axios.post(`${api_url}createpointer`, data);
  static deletePointer = (named) => axios.delete(`${api_url}deletepointers`, { data: { named } });
}