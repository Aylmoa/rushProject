"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsers = void 0;
const Users_1 = require("../../models/Users");
async function GetAllUsers() {
    const result = await Users_1.User.find({ deleted: false });
    return result;
}
exports.GetAllUsers = GetAllUsers;
