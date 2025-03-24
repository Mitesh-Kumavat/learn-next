import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { stringify } from "querystring";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id?: mongoose.Types.ObjectId;
    accessToken?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new mongoose.Schema<IUser>({
    firstName: {
        required: true,
        type: String,
        min: 2,
        max: 255,
        error: "First name is required"
    },
    lastName: {
        required: true,
        type: String,
        min: 2,
        max: 255,
        error: "Last name is required"
    },
    email: {
        required: true,
        type: String,
        min: 6,
        max: 255,
        pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    },
    password: {
        required: true,
        type: String,
        error: "Password is required"
    },
    accessToken: {
        type: String,
        default: "",
    }
}, { timestamps: true });


// before saving the user to the database, hash the password
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// compare the password
userSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

// create jwt token
userSchema.methods.createAccessToken = async function () {
    this.accessToken = await jwt.sign({ _id: this._id }, process.env.JWT_SECRET!, { expiresIn: '30d' });
    await this.save();
    return this.accessToken;
}

const User = mongoose.models?.User || mongoose.model("Users", userSchema);

export default User;