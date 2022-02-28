import { notification } from 'antd';
import axios from 'axios';
import qs from 'qs';

// const locale = globaVars.locale || 'zh';

const get =async (url: any, params: any) => {
  const rs = await axios.get(url, { params });
	const data = rs?.data || undefined;

	// 状态码200情况下，处理接口返回的数据
	if (data && data.code !== 200) {
		notification.error({ message: `${data.msg || data}` });
	}
	return data?.data;
}

const post =async (url: any, postData: any) => {
  const rs = await axios.post(url, postData, {headers:{'Content-Type': 'application/json;charset=UTF-8'}});
	const data = rs?.data || undefined;

	// 状态码200情况下，处理接口返回的数据
	if (data && data.code !== 200) {
		notification.error({ message: `${data.msg || data}` });
	}
	return data?.data;
}

const put =async (url: any, postData: any) => {
  const rs = await axios.put(url, postData, {headers:{'Content-Type': 'application/json;charset=UTF-8'}});
	const data = rs?.data || undefined;

	// 状态码200情况下，处理接口返回的数据
	if (data && data.code !== 200) {
		notification.error({ message: `${data.msg || data}` });
	}
	return data?.data;
}

const del =async (url: any, params: any) => {
  const rs = await axios.delete(url, { 
		data:params,	
	});
	const data = rs?.data || undefined;

	// 状态码200情况下，处理接口返回的数据
	if (data && data.code !== 200) {
		notification.error({ message: `${data.msg || data}` });
	}
	return data?.data;
}

export { get, post, put, del };