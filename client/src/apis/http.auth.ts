import request,{ AxiosResponse } from "axios";
import { ISignUp } from "../models/signup.model";
import HTTP from "./http.common";
export default class AuthAPI {

    static async register(signUpInformation : ISignUp){
        try {
            var response = await HTTP.post<AxiosResponse>("/api/auth/register",signUpInformation);
            return response;
        } catch (error) {
            if(request.isAxiosError(error) && error.response){
                return error.response;
            }
        }
    }

}