import axios from 'axios';
import { isRef, ref, unref, watchEffect } from 'vue';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const defaultConfig = {
	method: 'get',
};
// /config 의 값이 undifined로 넘어왔을떄 config가 빈 객체여야지 에러가 발생하지않는다.
export const useAxios = (url, config = {}) => {
	const response = ref(null);
	const data = ref([]);
	const error = ref(null);
	const loading = ref(false);

	const { params } = config;
	const excute = () => {
		data.value = null;
		error.value = null;
		loading.value = true;
		axios(url, {
			...defaultConfig,
			...config,
			params: unref(params),
		})
			.then(res => {
				console.log('res ' + res);
				console.log(res);
				response.value = res;
				data.value = res.data;
			})
			.catch(err => {
				error.value = err;
			})
			.finally(() => {
				loading.value = false;
			});
	};

	if (isRef(params)) {
		watchEffect(excute);
	} else {
		excute();
	}
	return {
		response,
		data,
		error,
		loading,
	};
};
