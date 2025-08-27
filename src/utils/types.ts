export interface TUser {
    id: string
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export type UserAuthData = {
    username: string,
    email: string,
    password: string
}