const getCohorts = () => {
    let cohorts = [];
    for ( let i = 15; i < 23; i++ ) {
        cohorts.push( { name: `web${ i }` } );
    }
    
    return cohorts;
};

exports.seed = function( knex, Promise ) {
    
    const cohorts = getCohorts();
    // Deletes ALL existing entries
    return knex( "cohorts" ).truncate().then( function() {
        // Inserts seed entries
        return knex( "cohorts" ).insert( cohorts );
    } );
};
