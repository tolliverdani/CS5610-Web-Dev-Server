import tuitsModel from './tuits-model.js';

const findAllTuits = () => tuitsModel.find();
const createTuit = (tuit) => tuitsModel.create(tuit);
const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
const deleteTuits = () => tuitsModel.deleteMany({handle: "tolliverdani"});
const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

export default {
    findAllTuits, createTuit, deleteTuit, updateTuit, deleteTuits
}