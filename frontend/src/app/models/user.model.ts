export interface UserModel {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    registrationDate: Date;
    subscriptionDate: Date;
}
