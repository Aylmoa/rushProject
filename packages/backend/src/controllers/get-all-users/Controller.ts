import {User} from "../../models/Users"
import {Response,Request} from "express";
import { ErrorHandler } from "../../utilities/ErrorHandler";
import { GetAllUsers } from "../../services/get-all-users/Service";
export async function ControllerGetAllUsers(req:Request, res:Response) {
  try {
    const result =await GetAllUsers();
    return res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage: e,
      response: res,
    });
  }
}
