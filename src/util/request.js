import axios from 'axios'
import config from '../../config';

const baseurl = process.env.NODE_ENV === 'production'?config.build.requestUrl:config.dev.requestUrl;
// const baseurl = config.build.requestUrl;

const service = axios.create({
	baseURL : baseurl,
	timeout : 5000
})
export default class HttpUtil {
	static get(url, params={}) {
		return new Promise((resolve, reject) => {
			service.get(url, {
				params
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch(reject)
		})
	}

	static post(url, data={}) {
		return new Promise((resolve, reject) => {

			service.post(url, data)
			.then((response) => {
				resolve(response.data);
			})
			.catch(reject)
		})
	}
	static put(url, data={}) {
		return new Promise((resolve, reject) => {

			service.put(url, data)
			.then((response) => {
				resolve(response.data);
			})
			.catch(reject)
		})
	}
}