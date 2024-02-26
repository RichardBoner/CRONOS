// import axios from 'axios';

// type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// interface FetchOptions {
//   method?: HttpMethod;
//   headers?: { [key: string]: string };
//   body?: string | FormData;
// }

// export async function fetcher<T>(url: string, options: FetchOptions = {}): Promise<T> {
//   const defaultHeaders = {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   };

//   const requestOptions: RequestInit = {
//     method: options.method ?? 'GET',
//     headers: { ...defaultHeaders, ...options.headers },
//     body: options.body,
//   };

//   const response = await fetch(url, requestOptions);

//   if (!response.ok) {
//     throw new Error(`Error ${response.status}: ${response.statusText}`);
//   }
//   return response.json();
// }

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
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(`Error ${error.response.status}: ${error.response.statusText}`);
      }
    } else {
      // Non-Axios error
      throw new Error('Non-Axios error occurred');
    }
  }
}
