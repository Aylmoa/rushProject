/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { UserType } from "../../models/Users";
export interface UpdateUserProps {
    body: UserType;
}
export declare function updateUser(props: UpdateUserProps): Promise<import("mongoose").Document<unknown, any, UserType> & UserType & {
    _id: string;
}>;
