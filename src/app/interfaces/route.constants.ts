export const APP_ROUTES: AppRoute[] = [
    {
        label: 'Home',
        path: '/home',
        index: 0
    },
    {
        label: 'Portfolios',
        path: '/portfolios',
        index: 1
    },
    {
        label: 'Our Vision',
        path: '/vision',
        index: 2
    },
    {
        label: 'Our Mission',
        path: '/mission',
        index: 3
    },
    {
        label: 'Contact Us',
        path: '/contact',
        index: 4
    }
]

interface AppRoute {
    label: string,
    path: string,
    index: number
}