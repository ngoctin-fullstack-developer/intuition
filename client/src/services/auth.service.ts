import AuthAPI from "../apis/http.auth";
import { ISignUp } from "../models/signup.model";

export default class AuthService{
    static async register(signUpInformation : ISignUp){
        var response = await AuthAPI.register(signUpInformation);
        if(response && response.status === 200){
            return true;
        }
        return false;
    }
}