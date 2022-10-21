import { useLocalStorage } from '@vueuse/core';
import { useJwt } from '@vueuse/integrations/useJwt';

// 黑暗模式相关
export const isDark = useDark();
export const toggleDark = useToggle(isDark);
export const preferredDark = usePreferredDark();

// UI逻辑相关
export const useOnTop = () => {
  return useState('onTop', () => true);
};

export const useShowSearchBar = () => {
  return useState('showSearchBar', () => false);
};

// 服务器API接口访问相关
export const useServerFetch = async (path, options?) => {
  if (!path) throw Error('缺少API访问路径！'); // errors handling

  // 相关常量
  const {
    public: { apiBase },
  } = useRuntimeConfig();

  return options
    ? await useFetch(`${apiBase}/${path}`, options)
    : await useFetch(`${apiBase}/${path}`);
};

// 鉴权系统相关
export const useAuth = () => {
  // 相关常量
  const {
    public: { jwtName },
  } = useRuntimeConfig();

  const user = useState('user', () => null);
  const authenticated = useState('authenticated', () => false);
  const localJWT = useLocalStorage(jwtName, null);

  // Token登陆逻辑
  const auth = (jwt: string) => {
    // 如果没传递JWT直接放弃操作
    if (!jwt) return;
    // 清除本地的JWT
    localJWT.value = null;
    const { payload } = useJwt(jwt);
    const { iat, exp, ..._user } = payload.value;
    // check the expire time
    if (exp && exp * 1000 >= Date.now()) {
      // JWT 没过期 - 储存Cookie
      localJWT.value = jwt;
      //暂存登陆状态信息
      authenticated.value = true;
      user.value = _user;
    } else {
      // JWT 过期了 - 删除Cookie
      localJWT.value = null;
    }
  };

  // 同步登陆状态
  const syncAuthStatus = () => {
    if (localJWT.value) auth(localJWT.value);
  };

  return {
    auth,
    user,
    authenticated,
    syncAuthStatus,
  };
};
