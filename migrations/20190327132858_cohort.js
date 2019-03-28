exports.up = function( knex, Promise ) {
    return knex.schema.createTable( "cohorts", ( ( tableBuilder ) => {
        tableBuilder.increments( "id" );
        tableBuilder.string( "name" ).notNullable();
    } ) );
};

exports.down = function( knex, Promise ) {
    return knex.schema.dropTableIfExists( "cohorts" );
};
