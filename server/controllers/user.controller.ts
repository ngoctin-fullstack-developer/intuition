import { Request, Response } from 'express';
import UserDatabaseOperation from '../database/user.database.operation';
import dotenv from 'dotenv';
dotenv.config();
export default class UserController {
    static async getAllUsers(request : Request, response : Response) {
        var users = await UserDatabaseOperation.findAllUsers();
        if (users && users.length > 0) {
            return response.status(200).json(users);
        }
        return response.status(301).json("Empty Users List !");
    }

    
}