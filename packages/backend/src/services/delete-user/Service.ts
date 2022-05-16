import { UserType, User } from "../../models/Users";

export interface DeleteUserProps {
  body: any;
  
}
export async function deleteUser(props:DeleteUserProps){
const {body}=props;

const deleteUser = await User.findByIdAndUpdate(
    {
      _id: body._id,
    },
    { $set: { deleted: true } },
    { returnOriginal: false }
  );
return deleteUser;
}