import { UserType, User } from "../../models/Users";

export interface DeleteUserProps {
  body: UserType;
  
}
export async function DeleteUser(props:DeleteUserProps){
const {_id}=props.body;

const deleteUser = await User.findByIdAndUpdate(
    {
      _id: _id,
    },
    { $set: { deleted: true } },
    { returnOriginal: false }
  );
return deleteUser;
}