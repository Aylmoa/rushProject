"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerGetAllUsers = void 0;
const ErrorHandler_1 = require("../../utilities/ErrorHandler");
const Service_1 = require("../../services/get-all-users/Service");
async function ControllerGetAllUsers(req, res) {
    try {
        const result = await (0, Service_1.GetAllUsers)();
        return res.send(result);
    }
    catch (e) {
        (0, ErrorHandler_1.ErrorHandler)({
            errorMessage: e,
            response: res,
        });
    }
}
exports.ControllerGetAllUsers = ControllerGetAllUsers;
