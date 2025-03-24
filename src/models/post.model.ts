import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        min: [2, "Title is too short"],
        max: [255, "Title is too long"],
        error: "Title is required"
    },
    description: {
        required: true,
        type: String,
        min: [6, "Description is too short"],
        error: "Description is required"
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
}, { timestamps: true });

const Post = mongoose.models?.Post || mongoose.model("Posts", postSchema);

export default Post;