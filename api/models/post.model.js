import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    text: String,
    timestamp: Date,
    likes: [{
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        timestamp: Date
    }],
    comments: [{
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        text: String,
        timestamp: Date
    }],
    retweets: [{
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        timestamp: Date
    }],
    images: [{
        type:String
      }],
})

const Post = mongoose.model('Post', postSchema);
export default Post;