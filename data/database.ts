import Knex = require("knex");

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.sqlite3',
    },
    pool: {
        afterCreate: ( conn: any, cb: any ) =>
            conn.run( 'PRAGMA foreign_keys = ON', cb )
    },
    useNullAsDefault: true, // needed for sqlite
    
};

export const database: Knex = Knex( knexConfig );

