import { request } from "http";
import { json } from "stream/consumers";
import AuthAPI from "../apis/http.auth";
import { ISignin } from "../models/signin.model";
import { ISignUp } from "../models/signup.model";
import { ITokens } from "../models/tokens.model";
import { IUser } from "../models/user.model"
export default class AuthService {

    static async register(signUpInformation: ISignUp) {
        var response = await AuthAPI.register(signUpInformation);
        if (response && response.status === 200)
            return true
        return false;
    }

    static async authenticate(signInInformation: ISignin) {
        var response = await AuthAPI.authenticate(signInInformation);
        if (response) {
            console.log(response.accessToken)
            localStorage.setItem('accessToken', JSON.stringify(response.accessToken));
        }
    }

    static async logout() {
        localStorage.removeItem('user');
    }

    static getAccessToken() : string {
        var user = localStorage.getItem('user');
        var accessToken = 'Bearer ';
        if (user){
            accessToken = accessToken + ' ' + JSON.parse(user).accessToken;
        }
        return accessToken;
    }

    static async authorize(tokens: ITokens) {
        var user: IUser = await AuthAPI.getUserByToken(tokens);
        if (user) {
            console.log("user : " + Object.values(user));
            return user;
        }
        return null;
    }

    static async login(signin: ISignin) {
        await AuthService.authenticate(signin);
        var accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            var tokens: ITokens = {
                accessToken: accessToken,
                refreshToken: ''
            };
            var user: IUser|null = await AuthService.authorize(tokens);
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                return true;
            }
            return false;
        } else {
            //log error
            return false;
        }
    }
}