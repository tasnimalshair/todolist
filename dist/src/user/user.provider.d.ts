import { User } from "./user.model";
export declare const UserProvider: {
    provide: string;
    useFactory: () => typeof User;
}[];
