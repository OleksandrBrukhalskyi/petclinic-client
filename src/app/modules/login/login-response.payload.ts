export interface LoginResponse {
    token: string;
    refreshToken: string;
    expiresAt: Date;
    login: string;
}