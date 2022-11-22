enum API {
  LOGIN = '/auth/login',
  SIGNUP = '/auth/signup',
  LOGOUT = '/auth/logout',
}

interface LoginResult {
  token: string;
}

const request = useRequest();

// 鉴权系统
export const useAuthentication = () => {
  return {
    login: async (credential: Credential): Promise<string | void> => {
      const { data, error } = await request.post<Response<LoginResult>>(
        API.LOGIN,
        credential
      );
      if (error.value) {
        console.error(error.value);
        return;
      }
      // 成功获取JWT
      return unref(data)?.data.token;
    },
  };
};
