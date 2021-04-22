export interface LoginResponse {
    token: string;
    refreshToken: string;
    expiresAt: Date;
    login: string;
    surname: string;
    firstname: string;
    patronymic: string;
    
}