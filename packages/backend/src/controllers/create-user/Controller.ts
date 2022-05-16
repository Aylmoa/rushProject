import { User } from "../../models/Users";
import { ErrorHandler } from "../../utilities/ErrorHandler";
import { Response, Request } from "express";
import { CreateUser } from "../../services/create-user/Service";

export async function ControllerCreateUser(req: Request, res: Response) {
  try {
   const result=await CreateUser({body:req.body});

    return res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage: e,
      response: res,
    });
  }
}
