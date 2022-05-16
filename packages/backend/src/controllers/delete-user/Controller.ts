import { User } from "../../models/Users";
import { Response, Request } from "express";
import { ErrorHandler } from "../../utilities/ErrorHandler";
import { DeleteUser } from "../../services/delete-user/Service";
export async function ControllerDeleteUser(req: Request, res: Response) {
  try {
    const result=await DeleteUser({body:req.body, })
    return res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage: e,
      response: res,
    });
  }
}
