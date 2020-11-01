export const CLIENT_ID = 'dscatalog';
export const CLIENT_SECRET = 'dscatalog123';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirestName: string;
    userId: number;
}

export const saveSessionData = (LoginResponse: LoginResponse) => {
    localStorage.setItem('auth-data', JSON.stringify(LoginResponse));
}