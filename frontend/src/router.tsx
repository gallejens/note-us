import { RootRoute, Route, Router } from '@tanstack/react-router'
import { HomePage } from './components/home'
import { LoginPage } from './components/login'
import { SignupPage } from './components/signup'

const rootRoute = new RootRoute()

const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage
})


const loginRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: LoginPage
})

const signupRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/signup',
    component: SignupPage
})

const routeTree = rootRoute.addChildren([homeRoute, loginRoute, signupRoute])

const router = new Router({ routeTree })
export default router

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}