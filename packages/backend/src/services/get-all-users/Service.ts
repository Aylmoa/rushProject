import { UserType, User } from "../../models/Users";

export async function getAllUsers(){

const result = await User.find({deleted:false});
return result;
}