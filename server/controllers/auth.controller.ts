import { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcrypt'
import AuthMiddleware from '../middleware/auth.middleware';
import UserDatabaseOperation from '../database/user.database.operation';
export default class AuthController {
    static async register(request: Request, response: Response) {
        // Mapping user from request
        var user: User = {
            id: request.body.id,
            fullname: request.body.fullname,
            username: request.body.username,
            password: request.body.password,
            role: request.body.role
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;

        // Call database and return response
        var result = await UserDatabaseOperation.createUser(user);
        if (result) {
            return response.status(200).json(user);
        }
        return response.status(304).json("Create User Failed !");
    }
    static async authenticate(request: Request, response: Response) {
        var user = await UserDatabaseOperation.findByUsername(request.body.username);
        var accessToken = null;
        var refreshToken = null;
        if (user && bcrypt.compare(request.body.password, user.password)) {
            accessToken = AuthMiddleware.generateToken(user);
            refreshToken = AuthMiddleware.generateRefreshToken(user.username,user.password);
        }
        
        if (accessToken) {
            return response.status(200).json({
                status: 200,
                accessToken,
                refreshToken
            })
        }
        return response.status(404).json({
            status: 404,
            msgErr: "User not found !"
        })
    }
    static async authorize(request: Request, response: Response) {
        var token = request.body.accessToken;
        var user: User | null = AuthMiddleware.getUserByToken(token);
        if (user) {
            return response.status(200).json({
                status: 200,
                data: user
            })
        }
        return response.status(404).json({
            status: 404,
            msgErr: "Authorize Failed !"
        })
    }
}