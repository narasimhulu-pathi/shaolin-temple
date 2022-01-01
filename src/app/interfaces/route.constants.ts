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

export const PORTFOLIO_ROUTES: AppRoute[] = [
    {
        label: 'Angular',
        path: '/angular',
        index: 0
    },
    {
        label: 'Agile',
        path: '/agile',
        index: 1
    },
    {
        label: 'Java',
        path: '/java',
        index: 2
    },
    {
        label: 'Python',
        path: '/python',
        index: 3
    },
    {
        label: 'AWS',
        path: '/aws',
        index: 4
    }
]

interface AppRoute {
    label: string,
    path: string,
    index: number
}