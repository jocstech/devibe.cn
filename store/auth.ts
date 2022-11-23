// store/auth.ts
import { useAuthentication } from '~/composables/auth';

const auth = useAuthentication();

import { useJwt } from '@vueuse/integrations/useJwt';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: <string | any>null,
    user: <SystemUser | any>null,
  }),
  actions: {
    async login(credential: Credential) {
      const token = await auth.login(credential); // api call to auth
      if (!token) return console.error('没有获得令牌'); //无法取得令牌，直接报错

      const { payload } = useJwt<SystemUser>(token); // 从令牌中解析出用户信息

      if (unref(payload)?._id) {
        // 通过令牌解析后才能合法使用
        this.token = token;
        this.user = payload.value;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
  persist: true,
});
