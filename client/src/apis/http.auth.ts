import request,{ AxiosResponse } from "axios";
import { ISignin, IUserLogin } from "../models/signin.model";
import { ISignUp } from "../models/signup.model";
import { ITokens } from "../models/tokens.model";
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

    static async authenticate(signInInformation : ISignin){
        try {
            var response = await HTTP.post("http://localhost:8080/api/auth/authentication",signInInformation);
            return response.data;
        } catch (error) {
            if(request.isAxiosError(error) && error.response){
                return error.response;
            }
        }
    }

    static async getUserByToken(tokens : ITokens){
        try{
            var response = await HTTP.get('http://localhost:8080/api/auth/authorization',{
                data : {
                    tokens
                }
            });
            return response.data.data;
        }catch(error){
            if(request.isAxiosError(error) && error.response){
                return error.response;
            }
        }
    }

    

}