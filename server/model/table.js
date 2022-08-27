const db = require('../config/db');

class Table{
    static getTable(){
        let query = "SELECT * FROM tablek";
        return db.execute(query);
    }
    static createTable(tNum,Vacant)
    {
        let query = `insert into tablek (tableNo,isTableVacant)
        values('${tNum}','${Vacant}')`;
        return db.execute(query);
    }
}
module.exports = Table;