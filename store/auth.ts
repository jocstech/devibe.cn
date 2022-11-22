// store/auth.ts
import { useJwt } from '@vueuse/integrations/useJwt';

const auth = useAuthentication();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: <string | any>null,
    user: <SystemUser | any>null,
  }),
  actions: {
    async login(credential: Credential) {
      const token = await auth.login(credential);
      if (token) {
        this.token = token;
        const { header, payload } = useJwt(token);
        console.log(header);
        this.user = payload.value;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('auth');
    },
  },
  persist: true,
});
