import User from "../models/user.model"
const DBConfig = require('../database/database.config');
import DBConnect from 'mssql';

export default class UserDatabaseOperation {
    static async createUser(user: User) {
        try {
            var connection = await DBConnect.connect(DBConfig);
            var sql = `INSERT INTO TCUSTOMERS 
            VALUES('${user.id}',N'${user.fullname}',
            '${user.username}','${user.password}',
            '${user.email}','${user.phoneNumber}',
            '${user.birthday}',N'${user.address}',
            '${user.role}')`;
            var result = await connection.request().query(sql);
            console.log(result.rowsAffected);
            if (Number(result.rowsAffected) > 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(`error : ${error}`);
            return false;
        }
    }

    static async findByUsername(username: string): Promise<User | null> {
        try {
            var connection = await DBConnect.connect(DBConfig);
            var sql = `SELECT * FROM TCUSTOMERS WHERE username = '${username}'`;
            var result = await connection.request().query(sql);
            return result.recordset[0];
        } catch (error) {
            console.log(`error : ${error}`);
            return null;
        }
    }
    static async findAllUsers(): Promise<Array<User> | null> {
        try {
            var connection = await DBConnect.connect(DBConfig);
            var sql = `SELECT * FROM TCUSTOMERS`;
            var result = await connection.request().query(sql);
            return result.recordset;
        } catch (error) {
            console.log(`error : ${error}`);
            return null;
        }
    }
}