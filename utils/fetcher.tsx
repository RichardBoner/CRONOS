type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method?: HttpMethod;
  headers?: { [key: string]: string };
  body?: string | FormData;
}

export async function fetcher<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const requestOptions: RequestInit = {
    method: options.method ?? 'GET',
    headers: { ...defaultHeaders, ...options.headers },
    body: options.body,
  };

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
