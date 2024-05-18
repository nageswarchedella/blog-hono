import { DB } from "sqlite";

const db = new DB('blog.db')

// create user 

const userCreate = `Create TABLE user(ID INTEGER PRIMARY KEY, name, email, phone_number)`;
db.execute(userCreate);