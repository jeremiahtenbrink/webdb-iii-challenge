exports.up = function( knex, Promise ) {
    return knex.schema.createTable( "students",
        ( ( tableBuilder ) => {
            
            tableBuilder.increments( "id" );
            tableBuilder.string( "name", 255 );
            // cohort id foreign key
            tableBuilder.integer( "cohort_id" ).
                unsigned().
                references( "cohorts.id" ).
                onDelete( "CASCADE" ).
                onUpdate( "CASCADE" );
            
        } ) );
    
};

exports.down = function( knex, Promise ) {
    return knex.schema.dropTableIfExists( "students" );
};
