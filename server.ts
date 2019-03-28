import { Express } from "express";

const studentRouter = require( './students/student-router' );
const cohortsRouter = require( './cohorts/cohorts-router' );
const express = require( 'express' );
const helmet = require( 'helmet' );

const server: Express = express();

server.use( helmet() );
server.use( express.json() );


server.use( '/students', studentRouter );
server.use( '/cohorts', cohortsRouter );
server.use( '/', ( req, res ) => {
    res.status( 200 ).json( { message: "yup it works" } )
} );
module.exports = server;
