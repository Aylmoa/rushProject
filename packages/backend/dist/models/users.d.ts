/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Schema } from "mongoose";
export interface UserType {
    username: string;
    password: string;
    name: string;
    lastName: string;
    age: number;
    email: string;
    profilePicture: string;
    birthDate: Date;
    deleted: boolean;
    _id?: string;
}
export declare const userSchema: Schema<any, import("mongoose").Model<any, any, any, any>, {}, {}>;
export declare const User: import("mongoose").Model<UserType, {}, {}, {}>;
