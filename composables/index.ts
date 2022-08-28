import { useJwt } from '@vueuse/integrations/useJwt';

// dark mode composables
export const isDark = useDark();
export const toggleDark = useToggle(isDark);
export const preferredDark = usePreferredDark();

export const useOnTop = () => {
  return useState('onTop', () => true);
};

export const useAuth = () => {
  const {
    public: { jwtCookieName },
  } = useRuntimeConfig();

  const user = useState('user', () => null);
  const status = useState('status', () => false);
  const localJwt = useCookie(jwtCookieName);

  const auth = (jwt: string) => {
    if (jwt) {
      const { payload } = useJwt(jwt);
      const { iat, exp, ..._user } = payload.value;
      // check the expire time
      if (exp && exp * 1000 >= Date.now()) {
        // JWT 没过期 - 储存Cookie
        useCookie(jwtCookieName, {
          expires: new Date(exp * 1000),
        }).value = jwt;
        //持久化关键信息
        status.value = true;
        user.value = _user;
      } else {
        // JWT 过期了 - 删除Cookie
        localJwt.value = undefined;
      }
    }
  };

  if (!status.value) {
    auth(localJwt.value);
  }

  return {
    auth,
    user,
    status,
  };
};

export const useServerFetch = async (path, options?) => {
  const config = useRuntimeConfig(); // get env variable
  if (!path) throw Error('缺少API访问路径！'); // errors handling

  return options
    ? await useFetch(`${config.public.apiBase}/${path}`, options)
    : await useFetch(`${config.public.apiBase}/${path}`);
};
