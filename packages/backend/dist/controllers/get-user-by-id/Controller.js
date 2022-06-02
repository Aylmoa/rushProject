"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerGetUserById = void 0;
const ErrorHandler_1 = require("../../utilities/ErrorHandler");
const Service_1 = require("../../services/get-user-by-id/Service");
async function ControllerGetUserById(req, res) {
    try {
        const result = await (0, Service_1.getUserById)({ body: req.body });
        return res.send(result);
    }
    catch (e) {
        (0, ErrorHandler_1.ErrorHandler)({
            errorMessage: e,
            response: res,
        });
    }
}
exports.ControllerGetUserById = ControllerGetUserById;
