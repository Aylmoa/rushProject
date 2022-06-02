import { Response } from "express";
export interface ErrorHandlerProps {
    response: Response;
    errorMessage: any;
    status?: number;
    message?: string;
}
export declare function ErrorHandler(props: ErrorHandlerProps): void;
