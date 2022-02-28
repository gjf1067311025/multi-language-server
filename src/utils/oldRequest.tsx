/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { notification } from "antd";
// import globaVars from '@/globalVars';

// 暂时不需要取消请求功能
// const { CancelToken } = axios;

const request = (config: any) => {
  // const source = CancelToken.source();
  const locale = 'zh';
  // const locale = globaVars.locale || 'zh';
  const baseConfig = {
    url: '',
    method: 'POST',
    baseURL: 'http://172.0.0.1:8000',
    responseType: 'json',
    maxmessageLength: 2000,
    timeout: 10000,
    crossDomain:true,
    withCredentials: true,
    validateStatus: (status: number) => status >= 200 && status < 300,
    headers: {
        language: locale,
        // email: globaVars.username,
        'Content-Type':'application/x-www-form-urlencoded',
        'Request-Redirect-Path': location.href,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Expose-Headers': 'Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type',
    },
    // CancelToken: source.token,
    };

  // 创建请求实例
  const instance = axios.create();
  const reqConfig = { ...baseConfig, ...config };

  // 添加请求拦截器
  instance.interceptors.request.use(
    initConfig => {
      // 在发送请求之前做些什么。如：修改data，添加一些通用参数
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data = {} } = initConfig;
      // todo
      return initConfig;
    },
    error => {
      console.log('request:', error);

      // 对请求错误做些什么
      notification.error({ message: `请求错误` });
      return Promise.reject(error);
    },
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    response => {
      // 对响应数据做点什么
      const { status, statusText } = response;
      if (status !== 200) {
        notification.error({ message: `${statusText}` });
      }

      return response;
    },
    error => {
      console.log('response:', error);
      // 对响应错误做点什么
      if (error.response.status === 500) {
      // notification.error({
      // message: `${
      // error.response.data?.BaseResp?.StatusMessage || '未知错误'
      // }`,
      // });
        return error.response;
      }
      if (error.response.status === 401) {
        location.href = error.response.data;
        return error.response;
      }
      notification.error({
        message: `响应错误`,
      });
      return Promise.reject(error);
    },
  );

  // 发送请求
  return instance.request(reqConfig).catch((thrown: any) => {
    if (axios.isCancel(thrown)) {
      notification.warning({ message: `请求取消` });
    }
  }) as any;

  // return source；
};

const get = async (url: string, params: any) => {
  const rs = await request({
    method: 'GET',
    url,
    params,
  });

  const data = rs?.data || undefined;

  // 状态码200情况下，处理接口返回的数据
  if (data && data.BaseResp?.StatusCode !== 0) {
    notification.error({ message: `${data.BaseResp?.StatusMessage || data}` });
  }
  return data;
};

const post = async (url: string, postData: any) => {
  const rs = await request({
    method: 'POST',
    url,
    data: postData,
  });

  const data = rs?.data || undefined;

  // 状态码200情况下，处理接口返回的数据
  if (data && data.BaseResp?.StatusCode !== 0) {
    notification.error({ message: `${data.BaseResp?.StatusMessage || data}` });
  }
  return data;
};

const put = async (url: string, postData: any) => {
  const rs = await request({
    method: 'PUT',
    url,
    data: postData,
  });

  const data = rs?.data || undefined;

  // 状态码200情况下，处理接口返回的数据
  if (data && data.BaseResp?.StatusCode !== 0) {
    notification.error({ message: `${data.BaseResp?.StatusMessage || data}` });
  }
  return data;
};

const del = async (url: string, params: any) => {
  const rs = await request({
    method: 'DELETE',
    url,
    params,
  });

  const data = rs?.data || undefined;

  // 状态码200情况下，处理接口返回的数据
  if (data && data.BaseResp?.StatusCode !== 0) {
    notification.error({ message: `${data.BaseResp?.StatusMessage || data}` });
  }
  return data;
};

export { get, post, put, del };
