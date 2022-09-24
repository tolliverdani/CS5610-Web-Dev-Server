import mongoose from 'mongoose';

const schema = mongoose.Schema({
    title: String,
    topic: String,
    postedBy:
        {
            username: String
        },
    handle: String,
    liked: Boolean,
    verified: Boolean,
    time: String,
    "logo-image": String,
    "avatar-image": String,
    tuits: String,
    stats:
        {
            "comments": Number,
            "retuits": Number,
            "dislikes": Number,
            "likes": Number
        }

}, {collection: 'tuits'});
export default schema;