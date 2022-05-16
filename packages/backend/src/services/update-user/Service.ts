import {  User } from "../../models/Users";
export interface UpdateUserProps {
  body: any;  
}
export async function updateUser(props:UpdateUserProps){
const {body,}=props;
const updateUser = await User.findByIdAndUpdate(
    { _id: body._id, deleted:false },
    { $set: { username: body.username, name: body.name } },
    { returnOriginal: false }
  );
return updateUser;
}