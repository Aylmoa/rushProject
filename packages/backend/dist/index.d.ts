declare const express: any;
declare const MongoClient: any, ObjectId: any;
declare const cors: any;
declare const bodyParser: any;
declare const app: any;
declare const port = 4000;
declare const jsonParser: any;
declare const url = "mongodb://localhost:27017";
declare const client: any;
declare const dbName = "myProject";
declare function checkToken(req: any, res: any, next: any): void;
declare let db: any;
