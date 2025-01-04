import pg from "pg";
const { Client } = pg;
const client = new Client({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  port: 5433,
  database: "postgres",
});
client.connect();
export default client