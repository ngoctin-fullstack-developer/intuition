export interface IUser {
    id: string,
    fullname: string,
    username: string,
    password: string,
    email: string,
    phoneNumber: string,
    birthday: string,
    address: string,
    role: string
}

export const initialUser : IUser = {
    id: '',
    fullname: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    birthday: '',
    address: '',
    role: ''
}