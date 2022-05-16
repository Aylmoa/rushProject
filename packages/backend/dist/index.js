const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const jsonParser = bodyParser.json({
    limit: "5000mb",
    extended: true,
    parameterLimit: 5000,
});
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "myProject";
app.use(cors());
app.use(jsonParser);
function checkToken(req, res, next) {
    console.log("hola");
    next();
}
;
let db;
app.listen(port, async () => {
    await client.connect();
    console.log("Connected successfully to server");
    db = client.db(dbName);
    const collection = db.collection("documents");
    console.log(`Example app listening on port ${port}`);
});
app.get("/get-all-users", checkToken, async (req, res) => {
    const collection = await db.collection("documents");
    const result = await collection.find({}).toArray();
    res.send(result);
});
app.post("/create-user", checkToken, async (req, res) => {
    const collection = await db.collection("documents");
    const newUser = await collection.insertOne(req.body);
    const createdUser = await collection.findOne({
        _id: ObjectId(newUser.insertedId),
    });
    res.send(createdUser);
});
app.put("/update-user", checkToken, async (req, res) => {
    const collection = await db.collection("documents");
    const updateUser = await collection.findOneAndUpdate({ _id: ObjectId(req.body._id) }, { $set: { username: req.body.username, name: req.body.name } }, { returnOriginal: false });
    console.log("Updated documents =>", updateUser);
    res.send(updateUser.value);
});
app.delete("/delete-user", checkToken, async (req, res) => {
    const collection = await db.collection("documents");
    const deleteUser = await collection.deleteOne({
        _id: ObjectId(req.body._id),
    });
    console.log("Deleted document =>", deleteUser);
    res.send(deleteUser);
});
app.post("/get-user-by-id", async (req, res) => {
    const collection = await db.collection("documents");
    const singleUser = await collection.findOne({ _id: ObjectId(req.body._id) });
    res.send(singleUser);
});
