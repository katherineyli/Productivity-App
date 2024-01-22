const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "mintpuff569",
  host: "localhost",
  port: 5432,
  database: "productivityapp",
});

module.exports = pool;
