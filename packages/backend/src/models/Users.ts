import {Schema, model} from "mongoose";

export interface UserType{
    username:string;
    password:string;
    name: string;
    lastName:string;
    age:number;
    email:string;
    profilePicture:string;
    birthDate:Date;
    deleted:boolean;
}

export const userSchema= new Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    age:{type:Number, required:true},
    email:{type:String, required:true},
    profilePicture:{type:String, required:true},
    birthDate:{type:Date, required:true},
    deleted:{type: Boolean,required:true},
})
export const User = model<UserType>("User", userSchema)