const sqlite3 = require('sqlite3');
export const cash = [];
//CONNECTING TO DATABASE

const db = new sqlite3.Database('chad.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return; 
  }
  console.log('Connected to the database successfully!');

  const tableName = 'products'; // Replace with your actual table name
  const sql = `SELECT * FROM ${tableName}`;

  db.all(sql, (err, rows) => {
    if (err) {
      console.error('Error querying the table:', err.message);
      db.close(); // Close the connection if there's an error
      return;
    }

   cash = rows;
    console.log('All data from the table:');
    console.log(cash); // Output the array of rows

    db.close(); // Close the database connection
  });
});
