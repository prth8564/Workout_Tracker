//import pg from "pg";
const pg = require("pg");
//import path from 'path';
const path = require('path');
//import dotenv from 'dotenv'
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname, '..','..', '.env')});
const { Client } = pg;
const client = new Client({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  port: 5433,
  database: "postgres",
});
client.connect();
module.exports= { client}