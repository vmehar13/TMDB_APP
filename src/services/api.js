import axios from 'axios';
// import {getUniqueId} from 'react-native-device-info';

const http = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	timeout: 100000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	params: { api_key: '87cdc975a24df96b7643c610c89f24b9' },
});
// export const http2 = 'https://medzine.svisf.in/'
http.interceptors.request.use(
	async (config) => {
		// const token = await AsyncStorage.getItem('@USER_TOKEN');
		// if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
export default http;