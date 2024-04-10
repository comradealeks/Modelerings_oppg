const model = {
    app: {
        currentPage: 'userLogin', //eller newUser, settings, mainPage, profile, ...
    },
    UserType: ['superuser', 'adult', 'teen', 'child'],
    inputs: {
        login: {
            username: null,
            password: null,
            errorMessage: null, 
        },
        register: {
            name: null,
            type: null,
            username: null,
            password: null,
            password2: null,
            email: null,
            errorMessage: null,
        },
        addTask: {
            Name: null,
            type: [],
            ageLimit: {from: null, to: null},
            dueDate: null,
            cost: null,
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
            ageLimit: {from: null, to: null},
            points: null,
            deadline: null,
        },
    },    
    prizes: [{
        Name: 'Blanket Fort!',
        ageLimit: {from: 5, to: 15},
        points: 3,
        deadline: null,
    }, {
        Name: 'Cinema',
        ageLimit: {from: 13, to: 20},
        points: 10,
        deadline: null,
    },
    ],
    taskTypes: [ 'once', 'dayly', 'weekly', 'monthly'],
    tasks: [
        {
            Name: 'take out garbage',
            type: ['weekly'],
            ageLimit: {from: 10, to: 20},
            dueDate: null,
            cost: 10,
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
    }, {
        id: 1111,
        type: 'superuser',
        name: '1',
        password: '1',
        username: '1',
        email: '1',
    }
    ],
};