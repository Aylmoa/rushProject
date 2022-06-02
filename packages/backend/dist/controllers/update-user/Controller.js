"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUpdateUser = void 0;
const ErrorHandler_1 = require("../../utilities/ErrorHandler");
const Service_1 = require("../../services/update-user/Service");
async function ControllerUpdateUser(req, res) {
    try {
        const result = await (0, Service_1.updateUser)({ body: req.body });
        return res.send(result);
    }
    catch (e) {
        (0, ErrorHandler_1.ErrorHandler)({
            errorMessage: e,
            response: res,
        });
    }
}
exports.ControllerUpdateUser = ControllerUpdateUser;
