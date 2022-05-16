import { User } from "../../models/Users";
import { ErrorHandler } from "../../utilities/ErrorHandler";
import { Response, Request } from "express";
import { createUser } from "../../services/create-user/Service";

export async function CreateUser(req: Request, res: Response) {
  try {
   const result=createUser({body:req.body});

    return res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage: e,
      response: res,
    });
  }
}
