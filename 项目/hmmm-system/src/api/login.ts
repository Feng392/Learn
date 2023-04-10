// import axios from 'axios';
import req from '@/utils/req';


export function login(data: User.LoginData) {
  return req.post('/frame/login', data);
}