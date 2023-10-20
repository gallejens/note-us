import { RootRoute, Route, Router } from '@tanstack/react-router';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';

const rootRoute = new RootRoute();

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
  beforeLoad: async () => {
    // check auth
  },
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegisterPage,
});

const routeTree = rootRoute.addChildren([homeRoute, loginRoute, registerRoute]);

const router = new Router({ routeTree });
export default router;

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
