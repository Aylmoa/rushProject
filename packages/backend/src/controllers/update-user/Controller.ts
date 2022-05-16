import { User } from "../../models/Users";
import { Response, Request } from "express";
import { ErrorHandler } from "../../utilities/ErrorHandler";
import { updateUser } from "../../services/update-user/Service";

export async function ControllerUpdateUser(req: Request, res: Response) {
  try {
   const result =await updateUser({body:req.body})

    return res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage: e,
      response: res,
    });
  }
}
