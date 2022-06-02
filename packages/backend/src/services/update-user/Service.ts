import { User, UserType } from "../../models/Users";
export interface UpdateUserProps {
  body: UserType;
}
export async function updateUser(props: UpdateUserProps) {
  const {
    age,
    birthDate,
    email,
    lastName,
    name,
    password,
    profilePicture,
    username,
    _id,
  } = props.body;
  const updateUser = await User.findByIdAndUpdate(
    { _id: _id, deleted: false },
    {
      $set: {
        username: username,
        name: name,
        age: age,
        birthDate: birthDate,
        email: email,
        lastName: lastName,
        password: password,
        profilePicture: profilePicture,
      },
    },
    { returnOriginal: false }
  );
  return updateUser;
}
