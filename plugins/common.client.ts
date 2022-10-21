export default defineNuxtPlugin((nuxt) => {
  // 同步登陆状态
  const { syncAuthStatus } = useAuth();
  syncAuthStatus();
});
