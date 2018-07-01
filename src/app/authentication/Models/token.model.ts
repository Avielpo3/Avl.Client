export interface UserToken {
    access_token: string;
    expires_in: number;
    token_type: string;
    role: string[];
}
