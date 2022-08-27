const db = require('../config/db');

class Login{
    constructor(username,password,role)
    {        
        this.username=username,
        this.password=password,
        this.role = role
    }
    static getlogin(){
        let query = `SELECT * FROM admin_login`;
        return db.execute(query);
        
    }
    static createLogin()
    {
        let query = `INSERT INTO admin_login (username,password,role)
        values('${this.username}','${this.password}','${this.role}')`;
        return db.execute(query);
    }
}
module.exports = Login;
