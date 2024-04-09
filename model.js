const model = {
    app: {
        currentPage: 'userLogin', 
    },

    inputs: {
        login: {
            username: null,
            password: null,
        },
        register: {
            type: ['superuser', 'adult', 'teen', 'child'],
            username: null,
            password: null,
            email: null,
        },
        calendar: {
            days: [],
            day: {
                id: null,
                date: null,
                tasks: [],
                goalsPrices: [],
            },
        },
    },
    prizes: {
        addPrize: {
            Name: null,
            type: [],
            ageLimit: [],
            ammount: null,
            price: null,
            deadline: null,
        },
        prizeList: [{
            Name: 'Blanket Fort!',
            type: ['child'],
            ageLimit: [5, 17],
            ammount: 5,
            price: 5, 
            deadline: null,
            }, {
            Name: 'Cinema',
            type: ['teen'],
            ageLimit: [13, 20],
            ammount: 3,
            price: 10, 
            deadline: null,
            },
        ],
    },
    tasks: {
        addTask: {
            Name: null,
            type: [],
            ageLimit: [],
            dueDate: null,
            prizes: [],
            responsible: [],
            points: null, 
        },
        taskList: [{
            Name: 'take out garbage',
            type: ['chore'],
            ageLimit: [10, 20],
            dueDate: null,
            prizes: ['Blanket Fort!', 'Cinema'],
            responsible: ['Aleksander Agledal', ],
            points: 30,
            },
        ],
    },
    profile: {
        id: null,
        name: null,
        username: null,
        email: null,
    },
    users: [{
        id: 1789,
        type: 'adult',
        name: 'Kalle Klovn',
        password: 'abc123',
        username: 'theClown',
        email: 'karl.morten.lunna@gmail.com',
        points: 13,
        }, {
        id: 4521,
        type: 'superuser',
        name: 'Aleksander Agledal',
        password: 'DwarfStarConqurer27',
        username: 'AleksiosMaximanus',
        email: 'aagledal@gmail.com',
        points: 120,
        }
    ],
};