import pg from "pg";
const { Client } = pg;
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({path: path.join(__dirname, '..','..', '.env')});
const client = new Client({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  port: 5433,
  database: "postgres",
});
client.connect();
export {client};