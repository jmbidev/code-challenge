import axios from 'axios'
import { API_URL } from '../configs'

import * as paths from './paths'

export const doGet = (path) => axios.get(API_URL + path)
export const doPost = (path, data) => axios.post(API_URL + path, data)
export const doPut = (path, data) => axios.put(API_URL + path, data)
export const doDelete = (path, data) => axios.delete(API_URL + path)

export { paths }
