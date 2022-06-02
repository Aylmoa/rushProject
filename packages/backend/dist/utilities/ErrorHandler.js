"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
function ErrorHandler(props) {
    const { errorMessage, response, status = 500, message = "" } = props;
    console.log(errorMessage);
    response.status(status);
    response.send({
        status: status,
        message: message,
        errorMessage: errorMessage
    });
}
exports.ErrorHandler = ErrorHandler;
