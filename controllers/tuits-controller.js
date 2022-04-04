import posts from "./tuits/tuits.js";

let tuits = posts;

const tuitController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = (req, res) => {
    const newTuit = req.body;

    newTuit._id = (new Date()).getTime() + '';
    newTuit.topic = "";
    newTuit.postedBy = {"username": "Dani"};
    newTuit.handle = "tolliverdani";
    newTuit.liked = false;
    newTuit.verified = false;
    newTuit.title = "";
    newTuit.time = "now";
    newTuit["logo-image"] = "../images/profilePicture.jpg";
    newTuit["avatar-image"] = "../images/profilePicture.jpg";
    newTuit.tuits = "122K";
    newTuit.stats = {"comments" : 0, "retuits": 0, "dislikes": 0, "likes": 0};

    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default tuitController;