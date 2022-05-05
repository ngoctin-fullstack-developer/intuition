export default class UserUtil {
    static createUserID() : string {
        var dateObj = new Date();
        return dateObj.getTime().toString();
    }
}