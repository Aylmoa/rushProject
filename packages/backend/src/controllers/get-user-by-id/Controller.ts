import {User} from "../../models/Users"
import { ErrorHandler } from "../../utilities/ErrorHandler";
import {Response,Request} from "express";
import { getUserById } from "../../services/get-user-by-id/Service";

export async function GetUserById(req:Request, res:Response) {
  try {
   const result=getUserById({body:req.body});
    return res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage: e,
      response: res,
    });
  }
}
