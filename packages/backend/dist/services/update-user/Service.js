"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const Users_1 = require("../../models/Users");
async function updateUser(props) {
    const { age, birthDate, email, lastName, name, password, profilePicture, username, _id, } = props.body;
    const updateUser = await Users_1.User.findByIdAndUpdate({ _id: _id, deleted: false }, {
        $set: {
            username: username,
            name: name,
            age: age,
            birthDate: birthDate,
            email: email,
            lastName: lastName,
            password: password,
            profilePicture: profilePicture,
        },
    }, { returnOriginal: false });
    return updateUser;
}
exports.updateUser = updateUser;
