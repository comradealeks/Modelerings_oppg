const model = {
    app: {
        currentPage: 'userLogin', //eller newUser, mainPage, profile, ...
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
        addTask: {
            Name: null,
            type: [],
            ageLimit: [],
            dueDate: null,
            prizes: [],
            responsible: [],
        },
        profile: {
            id: null,
            name: null,
            username: null,
            email: null,
        },
        addPrize: {
            Name: null,
            type: [],
            ageLimit: [],
            ammount: null,
            deadline: null,
        },
    },    
    prizes: [{
        Name: 'Blanket Fort!',
        type: ['child'],
        ageLimit: [5, 17],
        ammount: 5,
        price: 3,
        deadline: null,
    }, {
        Name: 'Cinema',
        type: ['teen'],
        ageLimit: [13, 20],
        ammount: 3,
        deadline: null,
    },
    ],
    taskTypes: ['chore', 'fun'],
    tasks: [
        {
            Name: 'take out garbage',
            type: ['chore'],
            ageLimit: [10, 20],
            ageLimit: { from: 10, to: 20 },
            dueDate: null,
            points: 10,
            // prizes: ['Blanket Fort!', 'Cinema'],
            responsible: [1789, 4521],
        },
    ],

    users: [{
        id: 1789,
        type: 'adult',
        name: 'Kalle Klovn',
        password: 'abc123',
        username: 'theClown',
        email: 'karl.morten.lunna@gmail.com',
    }, {
        id: 4521,
        type: 'superuser',
        name: 'Aleksander Agledal',
        password: 'DwarfStarConqurer27',
        username: 'AleksiosMaximanus',
        email: 'aagledal@gmail.com',
    }
    ],
};