import mongoose from "mongoose";
import { commentSchema } from "./Comments.js";

const tweetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    comments:[commentSchema], //nested document
    content:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    likes: {
        type: Number,
        default: 0
    },
    retweets: {
        type: Number,
        default: 0
    },
}, {timestamps: true });

export default mongoose.model("Tweet" , tweetSchema)