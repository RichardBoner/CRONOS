import axios, { AxiosRequestConfig } from 'axios';

export async function fetcher<T>(
  url: string,
  options: AxiosRequestConfig = {},
): Promise<T | undefined> {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const axiosOptions: AxiosRequestConfig = {
    method: options.method ?? 'get',
    headers: { ...defaultHeaders, ...options.headers },
    data: options.data,
  };

  try {
    const response = await axios(url, axiosOptions);
    console.log(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error
      // if (error.response) {
      //   // The request was made and the server responded with a status code
      //   // that falls out of the range of 2xx
      //   throw new Error(`Error ${error.response.status}: ${error.response.statusText}`);
      // }
      console.error('FETCH ERROR:', error);
      console.error('request sent to', url);
    } else {
      // Non-Axios error
      throw new Error('Non-Axios error occurred');
    }
  }
}
