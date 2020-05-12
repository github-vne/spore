import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Inject, Singleton } from 'typescript-ioc';
import { ToastService, ToastType } from 'ui-kit';

enum Method {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  DELETE = 'delete'
}

type ApiResponse = Promise<any>;

interface RequestConfig {
  config?: AxiosRequestConfig;
  handleHash?: boolean;
  handleError?: boolean;
  apiVer?: false | string;
}

// const BACKEND_URL = 'http://cuddly-parakeet.herokuapp.com/';
const BACKEND_URL = 'http://25.73.35.40/';

@Singleton
export default class Api {
  @Inject private toastService: ToastService;
  private requestSender: AxiosInstance = axios.create();

  private prepareUrl = (endpoint: string, apiVer: string | boolean): string => {
    return `${BACKEND_URL}api/${apiVer}/${endpoint}`;
  };

  private doRequest(
    method: Method,
    requestEndpoint: string,
    params: object,
    data: object | Array<any>,
    requestConfig: RequestConfig = {}
  ): ApiResponse {
    const { config = {}, apiVer = 'v1' } = requestConfig;
    const axiosConfig = { params, ...config };
    const endpoint = this.prepareUrl(requestEndpoint, apiVer);

    let request;
    switch (method) {
      case Method.GET: {
        request = this.requestSender.get(endpoint, axiosConfig);
        break;
      }
      case Method.DELETE: {
        request = this.requestSender.delete(endpoint, axiosConfig);
        break;
      }
      case Method.POST: {
        request = this.requestSender.post(endpoint, data, axiosConfig);
        break;
      }
      case Method.PATCH: {
        request = this.requestSender.patch(endpoint, data, axiosConfig);
        break;
      }
    }

    request = request
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        let text = 'Ошибка при отправке запроса! ';
        if (endpoint) text += `Адрес: ${endpoint} `;
        if (params) text += ` | Параметры: ${JSON.stringify(params)}\n`;
        this.toastService.showToast(ToastType.ERROR, 'Ошибка при запросе', text, 'common/report_problem');
        return Promise.reject(error);
      });

    return request;
  }

  get(endpoint: string, params: object = {}, config?: RequestConfig): ApiResponse {
    return this.doRequest(Method.GET, endpoint, params, {}, config);
  }

  post(endpoint: string, data?: any, config?: RequestConfig): ApiResponse {
    return this.doRequest(Method.POST, endpoint, {}, data, config);
  }

  patch(endpoint: string, data?: object, config?: RequestConfig): ApiResponse {
    return this.doRequest(Method.PATCH, endpoint, {}, data, config);
  }

  delete(endpoint: string, config?: RequestConfig): ApiResponse {
    return this.doRequest(Method.DELETE, endpoint, {}, {}, config);
  }
}
