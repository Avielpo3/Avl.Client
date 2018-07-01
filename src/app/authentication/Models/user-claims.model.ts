export interface UserClaims {
    Id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    lastLogon?: Date;
}
