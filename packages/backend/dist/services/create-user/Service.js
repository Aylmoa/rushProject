"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const Users_1 = require("../../models/Users");
async function CreateUser(props) {
    const { age, birthDate, deleted = false, email, lastName, name, password, profilePicture, username, } = props.body;
    const newUser = new Users_1.User({
        username: username,
        password: password,
        name: name,
        lastName: lastName,
        age: age,
        birthDate: birthDate,
        email: email,
        profilePicture: profilePicture,
        deleted: deleted,
    });
    const result = await newUser.save();
    console.log("eeee");
    return result;
}
exports.CreateUser = CreateUser;
