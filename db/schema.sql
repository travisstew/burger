-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet

CREATE DATABASE burgers_db;
USE burgers_db;



-- Create the table in the specified schema
CREATE TABLE burgers
(
  --id INT(10) NOT NULL AUTO_INCREMENT  primary Key, -- primary key column
  --burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN NOT NULL
 
);
