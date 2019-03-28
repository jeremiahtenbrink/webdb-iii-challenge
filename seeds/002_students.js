const faker = require( "faker" );

const getStudents = () => {
    let students = [];
    
    for ( let i = 1; i < 9; i++ ) {
        let numberOfStudents = Math.ceil( Math.random() * 50 );
        for ( let j = 0; j < numberOfStudents; j++ ) {
            students.push( { name: faker.name.findName(), cohort_id: i } );
        }
    }
    
    return students;
};

exports.seed = function( knex, Promise ) {
    
    const students = getStudents();
    
    // Deletes ALL existing entries
    return knex( "students" ).truncate().then( function() {
        // Inserts seed entries
        return knex( "students" ).insert( students );
    } );
};
