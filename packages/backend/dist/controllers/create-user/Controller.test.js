"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const express_1 = require("@jest-mock/express");
const Controller_1 = require("./Controller");
(0, vitest_1.describe)("CreateUser Tests", async () => {
    let mongoServer = await mongodb_memory_server_1.MongoMemoryServer.create();
    (0, vitest_1.beforeAll)(async () => {
        await mongoose_1.default.connect(mongoServer.getUri(), { dbName: "TestSuite" });
    });
    (0, vitest_1.afterAll)(async () => {
        await mongoServer.stop();
    });
    const { res, next } = (0, express_1.getMockRes)({
        locals: {}
    });
    (0, vitest_1.test)("Test example test", () => {
        const req = (0, express_1.getMockReq)({
            params: { _id: 12 },
            body: { username: "Username123",
                password: "password",
                name: "Juan",
                lastName: "Sanchez",
                age: 12,
                birthDate: "10/10/2021",
                email: "example@mail.com",
                profilePicture: "pictureurl.com", }
        });
        (0, Controller_1.ControllerCreateUser)(req, res);
        (0, vitest_1.expect)(res.json).toHaveBeenLastCalledWith(vitest_1.expect.objectContaining({
            id: 12
        }));
    });
});
