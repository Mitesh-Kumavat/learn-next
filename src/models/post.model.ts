import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        required: [true, "Title is required"],
        type: String,
        minLength: [2, "Title is too short"],
    },
    description: {
        required: [true, "Description is required"],
        type: String,
        minLength: [6, "Description is too short"],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ]
}, { timestamps: true });

const Post = mongoose.models?.Posts || mongoose.model("Posts", postSchema);

export default Post;