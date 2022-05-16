import { User } from "../../models/Users";
import { Response, Request } from "express";
import { ErrorHandler } from "../../utilities/ErrorHandler";
import { deleteUser } from "../../services/delete-user/Service";
export async function DeleteUser(req: Request, res: Response) {
  try {
    const result=deleteUser({body:req.body, })
    return res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage: e,
      response: res,
    });
  }
}
