import { useJwt } from '@vueuse/integrations/useJwt';

interface Credential {
  username: string;
  password: string;
}

export default defineNuxtPlugin((nuxt) => {
  const redirectUrl = nuxt.$router.currentRoute.value.query.redirectUrl ?? '/';

  return {
    provide: {
      login: async (credential: Credential) =>
        await useServerFetch('auth/login', {
          method: 'post',
          body: credential,
          async onResponse({ response }) {
            if (response.ok) {
              // 登陆成功
              // const user = response._data.user;
              const token = response._data.token;
              // 内部鉴权
              const { auth } = useAuth();
              await auth(token);
              // 登陆后进入原地址
              navigateTo(redirectUrl);
            } else {
              // 登陆失败
              throw Error(response._data.error);
            }
          },
        }),
    },
  };
});
