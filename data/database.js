"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knex = require("knex");
const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.sqlite3',
    },
    pool: {
        afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb)
    },
    useNullAsDefault: true,
};
exports.database = Knex(knexConfig);
//# sourceMappingURL=database.js.map