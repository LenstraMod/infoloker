import { Sequelize } from "sequelize";

const db = new Sequelize('infoloker','root','',{
    host : "localhost",
    dialect : "mysql"
});

export default db