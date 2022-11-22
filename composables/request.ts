//基于useFetch的自定义API服务封装
enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  UPDATE = 'UPDATE',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const useRequest = () => {
  // Clause Methods
  function fetch<T>(
    method: HTTP_METHODS,
    path: string,
    body?: Record<string, any>
  ) {
    // 'Content-Type': 'application/json';
    //'Authorization': 'Bearer xxx'

    const config = useRuntimeConfig();

    return useFetch<T>(path, {
      baseURL: config.public.apiBaseUrl,
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      onRequest({ request, options }) {
        // Set the request headers
        options.headers = options.headers || {};
      },
      onRequestError({ request, options, error }) {
        // Handle the request errors
      },
      onResponse({ request, response, options }) {
        return response._data;
      },
      onResponseError({ request, response, options }) {
        // Handle the response errors
      },
    });
  }

  // Http Methods
  const get = <T>(path: string) => fetch<T>(HTTP_METHODS.GET, path);

  const post = <T>(path: string, data: Record<string, any>) =>
    fetch<T>(HTTP_METHODS.POST, path, data);

  const update = <T>(path: string, data: Record<string, any>) =>
    fetch<T>(HTTP_METHODS.UPDATE, path, data);

  const patch = <T>(path: string, data: Record<string, any>) =>
    fetch<T>(HTTP_METHODS.PATCH, path, data);

  const remove = <T>(path: string) => fetch<T>(HTTP_METHODS.DELETE, path);

  return {
    get,
    post,
    update,
    patch,
    remove,
  };
};
