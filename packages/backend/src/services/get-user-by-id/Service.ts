import { User } from "../../models/Users";

export interface GetUserProps {
  body: any;
}
export async function getUserById(props: GetUserProps) {
  const { body } = props;

  const result = await User.findById({ _id: body._id, deleted: false });
  return result;
}
