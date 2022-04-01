import people from './users/users.js';
let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    users = users.map(u => u._id === userId ? updatedUser : u);
    res.sendStatus(200);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(u => u._id !== userId);
    res.sendStatus(200);
}

const findUsersByType = (req, res, type) => {
    return res.json(users.filter(t => t.type === type));
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type) {
        res.json(findUsersByType(req, res, type));
        return;
    }
    res.json(users);
}

export default userController;