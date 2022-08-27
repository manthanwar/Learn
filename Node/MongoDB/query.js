
// db = connect( 'mongodb://localhost/films' );
conn = Mongo();
db = conn.getDB("films");

printjson( db.movies.find( {} ) );
