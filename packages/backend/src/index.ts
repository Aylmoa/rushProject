import express from "express";
import mongoose from "mongoose";
import cors  from "cors";
import bodyParser from "body-parser";
import {CreateUser} from "./controllers/create-user/Controller"
import {GetAllUsers} from "./controllers/get-all-users/Controller"
import {UpdateUser} from "./controllers/update-user/Controller"
import {DeleteUser} from "./controllers/delete-user/Controller"
import {GetUserById} from "./controllers/get-user-by-id/Controller"

//
//---------------------------Default Settings---------------------
//
const jsonParser = bodyParser.json({
  limit: "5000mb",
  extended: true,
  parameterLimit: 5000,
});

const url = "mongodb://localhost:27017";
const port= 4000;
const app = express();

app.use(cors());
app.use(jsonParser);

//
//---------------------------Connection---------------------
//
app.listen(port, async () => {  
  const db = mongoose.connection;
  mongoose
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
app.get("/get-all-users", checkToken, GetAllUsers)
/* app.get("/get-all-users", checkToken, async (req, res) => {
  const collection = await db.collection("documents");
  const result = await collection.find({}).toArray();

  res.send(result);
}); */
app.post("/create-user", checkToken, CreateUser)
/* app.post("/create-user", checkToken, async (req, res) => {
  const collection = await db.collection("documents");
  const newUser = await collection.insertOne(req.body);
  const createdUser = await collection.findOne({
    _id: ObjectId(newUser.insertedId),
  });
  res.send(createdUser);
}); */
app.put("/update-user", checkToken, UpdateUser) 
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
app.delete("/delete-user", checkToken,DeleteUser )
// app.delete("/delete-user", checkToken, async (req, res) => {
//   const collection = await db.collection("documents");
//   const deleteUser = await collection.deleteOne({
//     _id: ObjectId(req.body._id),
//   });
//   console.log("Deleted document =>", deleteUser);
//   res.send(deleteUser);
// });
app.post("/get-user-by-id",checkToken, GetUserById)
/* app.post("/get-user-by-id", async (req, res) => {
  const collection = await db.collection("documents");
  const singleUser = await collection.findOne({ _id: ObjectId(req.body._id) });

  res.send(singleUser);
});
 */