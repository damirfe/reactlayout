export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'home',
        },
        {
            name: 'Gebruikers',
            url: '/gebruikers',
            icon: 'user-friends',
        },
        {
            name: 'Cinc',
            url: '/cin',
            icon: 'fighter-jet',
        },
        {
            name: 'Whatever',
            url: '/whatever',
            icon: 'atlas',
        },
        {
            name: 'Other list',
            url: '/other',
            icon: 'hamburger',
            children: [
                {
                    name: 'Virtual vaults',
                    url: '/other/vv',
                },
                {
                    name: 'YielDD',
                    url: '/other/yield',
                },
                {
                    name: 'Betabit',
                    url: '/other/betabit',
                }
            ]
        }
    ]
}