export interface IUser {
    id?: number;
    username?:  string;
    email?: string;
    is_admin?: number;
    remember_token?: null;
    avatar?: string | null;
}