"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const Controller_1 = require("./controllers/create-user/Controller");
const Controller_2 = require("./controllers/get-all-users/Controller");
const Controller_3 = require("./controllers/update-user/Controller");
const Controller_4 = require("./controllers/delete-user/Controller");
const Controller_5 = require("./controllers/get-user-by-id/Controller");
//
//---------------------------Default Settings---------------------
//
const jsonParser = body_parser_1.default.json({
    limit: "5000mb",
    extended: true,
    parameterLimit: 5000,
});
const url = "mongodb://localhost:27017";
const port = 4000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(jsonParser);
//
//---------------------------Connection---------------------
//
app.listen(port, async () => {
    const db = mongoose_1.default.connection;
    mongoose_1.default
        .connect(url)
        .catch((error) => console.log(error));
    console.log(`Example app listening on port ${port}`);
});
function checkToken(req, res, next) {
    console.log("hola");
    next();
}
//
//---------------------------End Points---------------------
//
app.get("/get-all-users", checkToken, Controller_2.ControllerGetAllUsers);
/* app.get("/get-all-users", checkToken, async (req, res) => {
  const collection = await db.collection("documents");
  const result = await collection.find({}).toArray();

  res.send(result);
}); */
app.post("/create-user", checkToken, Controller_1.ControllerCreateUser);
/* app.post("/create-user", checkToken, async (req, res) => {
  const collection = await db.collection("documents");
  const newUser = await collection.insertOne(req.body);
  const createdUser = await collection.findOne({
    _id: ObjectId(newUser.insertedId),
  });
  res.send(createdUser);
}); */
app.put("/update-user", checkToken, Controller_3.ControllerUpdateUser);
// app.put("/update-user", checkToken, async (req, res) => {
//   const collection = await db.collection("documents");
//   const updateUser = await collection.findOneAndUpdate(
//     { _id: ObjectId(req.body._id) },
//     { $set: { username: req.body.username, name: req.body.name } },
//     { returnOriginal: false }
//   );
//   console.log("Updated documents =>", updateUser);
//   res.send(updateUser.value);
// });
app.delete("/delete-user", checkToken, Controller_4.ControllerDeleteUser);
// app.delete("/delete-user", checkToken, async (req, res) => {
//   const collection = await db.collection("documents");
//   const deleteUser = await collection.deleteOne({
//     _id: ObjectId(req.body._id),
//   });
//   console.log("Deleted document =>", deleteUser);
//   res.send(deleteUser);
// });
app.post("/get-user-by-id", checkToken, Controller_5.ControllerGetUserById);
/* app.post("/get-user-by-id", async (req, res) => {
  const collection = await db.collection("documents");
  const singleUser = await collection.findOne({ _id: ObjectId(req.body._id) });

  res.send(singleUser);
});
 */ 
