import {User} from "../../models/Users"
import {Response,Request} from "express";
import { ErrorHandler } from "../../utilities/ErrorHandler";
import { getAllUsers } from "../../services/get-all-users/Service";
export async function GetAllUsers(req:Request, res:Response) {
  try {
    const result = getAllUsers();
    return res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage: e,
      response: res,
    });
  }
}
