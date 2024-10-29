import axios from 'axios';
import { api_url } from '../../../common/config';

axios.defaults.withCredentials = true;

export default class {
  static createNews = (data) => axios.post(`${api_url}createnews`, data);
  static deleteNews = (named) => axios.delete(`${api_url}deletenews`, { data: { named } });
}