import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';
import {getMockReq,getMockRes}from "@jest-mock/express";
import {ControllerCreateUser} from "./Controller";

describe("CreateUser Tests", ()=>{
    
    let mongoServer; 
     beforeAll(async ()=>{        
        mongoServer=await MongoMemoryServer.create();  
       await mongoose.connect(mongoServer.getUri(),{dbName:"TestSuite"})
    });
    afterAll(async () =>{
        await mongoServer.stop()        
    })
    const {res,next}= getMockRes({
        locals:{

        }
    })
    test("Test example test",()=>{
        const req=getMockReq({
            params:{_id:12},
            body:{ username:"Username123",
                password:"password",
                name: "Juan",
                lastName:"Sanchez",
                age: 12,
                birthDate: "10/10/2021",
                email: "example@mail.com",
                profilePicture: "pictureurl.com",}
        })

        ControllerCreateUser(req,res)
       expect(res.json).toHaveBeenLastCalledWith(
           expect.objectContaining({
               id:12
           })
       )
    })
})