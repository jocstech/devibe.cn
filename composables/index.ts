import { useJwt } from '@vueuse/integrations/useJwt';
import { useLocalStorage } from '@vueuse/core';
import configs from '~/configs';

// UI逻辑相关
export const useOnTop = () => {
  return useState('onTop', () => true);
};

export const useShowSearchBar = () => {
  return useState('showSearchBar', () => false);
};

// 鉴权系统相关
export const useAuth = () => {
  const user = useState('user', () => null);
  const authenticated = useState('authenticated', () => false);
  const localJWT = useLocalStorage(configs.jwtKey, null);

  // Token登陆逻辑
  const auth = (jwt: string) => {
    // 如果没传递JWT直接放弃操作
    if (!jwt) return;
    // 清除本地的JWT
    localJWT.value = null;
    const { header, payload } = useJwt(jwt);
    console.log(payload);
    // const { iat, exp, ..._user } = payload.value;
    // check the expire time
    // if (exp && exp * 1000 >= Date.now()) {
    //   // JWT 没过期 - 储存Cookie
    //   localJWT.value = jwt;
    //   //暂存登陆状态信息
    //   authenticated.value = true;
    //   user.value = _user;
    // } else {
    //   // JWT 过期了 - 删除Cookie
    //   localJWT.value = null;
    // }
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
