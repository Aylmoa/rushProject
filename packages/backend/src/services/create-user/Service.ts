import { UserType, User } from "../../models/Users";

export interface CreateUserProps {
  body: UserType;
}

export async function CreateUser(props: CreateUserProps) {
  const {
    age,
    birthDate,
    deleted=false,
    email,
    lastName,
    name,
    password,
    profilePicture,
    username,
  } = props.body;
  const newUser = new User({
    username: username,
    password: password,
    name: name,
    lastName: lastName,
    age: age,
    birthDate: birthDate,
    email: email,
    profilePicture: profilePicture,
    deleted: deleted,
  });
  const result = await newUser.save();
  console.log("eeee")
  return result;
}
