import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';


const mongoServer = await MongoMemoryServer.create();

(async () => {
const reult=  await mongoose.connect(mongoServer.getUri(), { dbName: "myProject" });

console.log(reult.connection.port);
  // your code here
  
  //await mongoose.disconnect();
})();