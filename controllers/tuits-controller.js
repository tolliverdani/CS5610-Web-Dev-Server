import TuitsDao from "../database/tuits/tuits-dao.js";

const tuitController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.delete('/api/tuits/', deleteTuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.postedBy = {"username": "Dani"};
    newTuit.handle = "tolliverdani";
    newTuit.liked = false;
    newTuit.verified = false;
    newTuit.time = "now";
    newTuit["logo-image"] = "../images/profilePicture.jpg";
    newTuit["avatar-image"] = "../images/profilePicture.jpg";
    newTuit.tuits = "122K";
    newTuit.stats = {
        "comments": 0,
        "retuits": 0,
        "dislikes": 0,
        "likes": 0
    }

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
    if (status.acknowledged === true) {
        res.sendStatus(200)
    }
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await TuitsDao.deleteTuit(tuitdIdToDelete);
    if (status.acknowledged === true) {
        res.sendStatus(200)
    }
}

const deleteTuits = async (req, res) => {
    const status = await TuitsDao.deleteTuits();
    if (status.acknowledged === true) {
        res.sendStatus(200)
    }
}


export default tuitController;