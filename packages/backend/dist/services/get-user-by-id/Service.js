"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const Users_1 = require("../../models/Users");
async function getUserById(props) {
    const { _id } = props.body;
    const result = await Users_1.User.findById({ _id: _id, deleted: false });
    return result;
}
exports.getUserById = getUserById;
