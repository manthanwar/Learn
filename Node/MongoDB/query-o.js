
db = connect("mongodb://localhost/films");
conn = Mongo();
db = conn.getDB("ami-films");

printjson( db.movies.find( {} ) );
