export default defineNuxtRouteMiddleware((to, from) => {
  const protectedRoutes = ['profile'];
  const { status, user } = useAuth();

  if (protectedRoutes.includes(<any>to.name)) {
    // 检查是否为登陆状态
    if (status.value) {
      // 如果是登陆状态
    } else {
      return navigateTo({
        path: '/auth/login',
        query: {
          redirectUrl: to.fullPath,
        },
      });
    }
  }
});
