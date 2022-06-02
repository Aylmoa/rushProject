"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
const Users_1 = require("../../models/Users");
async function DeleteUser(props) {
    const { _id } = props.body;
    const deleteUser = await Users_1.User.findByIdAndUpdate({
        _id: _id,
    }, { $set: { deleted: true } }, { returnOriginal: false });
    return deleteUser;
}
exports.DeleteUser = DeleteUser;
