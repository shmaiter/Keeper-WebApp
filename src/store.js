import sqlite3 from "sqlite3";

let db = new sqlite3.Database(
  "../database/snippets.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }

    console.log("Connected to snippets SQlite database.");
  }
);
