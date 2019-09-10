const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./data/produce.db3"
  }
};

module.exports = knex(knexConfig);
