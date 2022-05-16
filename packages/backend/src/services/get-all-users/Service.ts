import { UserType, User } from "../../models/Users";

export async function GetAllUsers(){

const result = await User.find({deleted:false});
return result;
}