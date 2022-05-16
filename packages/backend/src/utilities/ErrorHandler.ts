import {Response} from "express";

export interface ErrorHandlerProps{
    response:Response,
     errorMessage:any,
      status?:number,
       message?:string
}

export function ErrorHandler (props:ErrorHandlerProps) {
    const {errorMessage,response,status=500,message=""}=props
    console.log(errorMessage)
    response.status(status)
    response.send({
        status:status,
        message:message,
        errorMessage:errorMessage
    })
}

