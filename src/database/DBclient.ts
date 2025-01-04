import pg from "pg";
const { Client } = pg;
const client = new Client({
  user: "postgres",
  password: "root123",
  host: "localhost",
  port: 5433,
  database: "postgres",
});
client.connect();
export default client