import { useAuthStore } from '~~/store/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const protectedRoutes = ['profile'];

  const { token } = useAuthStore();

  // 检查是否命中保护路径.
  if (protectedRoutes.includes(<any>to.name)) {
    // 检查是否为登陆状态
    if (!token) {
      return navigateTo({
        path: '/auth/login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
  }
});
