import TuitsDao from "../database/tuits/tuits-dao.js";

const tuitController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;

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

    const insertedTuit = await TuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await TuitsDao.findAllTuits();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await TuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await TuitsDao.deleteTuit(tuitdIdToDelete);
    res.sendStatus(status);
}

export default tuitController;