import { User,UserType } from "../../models/Users";

export interface GetUserProps {
  body: UserType;
}
export async function getUserById(props: GetUserProps) {
  const { _id } = props.body;

  const result = await User.findById({ _id: _id, deleted: false });
  return result;
}
