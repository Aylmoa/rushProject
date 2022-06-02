"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String, required: true },
    birthDate: { type: Date, required: true },
    deleted: { type: Boolean, required: true },
});
exports.User = (0, mongoose_1.model)("User", exports.userSchema);
