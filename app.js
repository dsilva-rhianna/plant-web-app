const express = require( "express" );
const app = express();
const port = 3000;
const logger = require("morgan");

app.use(logger("dev"));

app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
} );

app.get( "/inventory", ( req, res ) => {
    res.sendFile( __dirname + "/views/inventory.html" );
} );

app.get( "/inventory/plant", ( req, res ) => {
    res.sendFile( __dirname + "/views/plant.html" );
} );

app.get( "/plantcropped", ( req, res ) => {
    res.sendFile( __dirname + "/views/plantcropped.gif" );
} );

app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );