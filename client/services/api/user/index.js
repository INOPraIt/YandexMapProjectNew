import axios from 'axios';
import { api_url } from '../../../common/config';

axios.defaults.withCredentials = true;

export default class {
  static getUserInfoEndpoint = () => axios.get(`${api_url}users/current`);
  static createUser = (data) => axios.post(`${api_url}registration`, data);
  static loginedUser = (data) => axios.post(`${api_url}login`, data)
}