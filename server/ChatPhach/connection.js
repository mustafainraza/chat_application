const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 1234,
  password: "12345678",
  database: "chat_application",
});

module.exports = client;
