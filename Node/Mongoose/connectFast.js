// connections/fast.js
const mongoose = require("mongoose");

const conn = mongoose.createConnection(process.env.MONGODB_URI);
conn.model("User", require("../schemas/user"));

module.exports = conn;

// connections/slow.js
const mongoose = require("mongoose");

const conn = mongoose.createConnection(process.env.MONGODB_URI);
conn.model("User", require("../schemas/user"));
conn.model("PageView", require("../schemas/pageView"));

module.exports = conn;
