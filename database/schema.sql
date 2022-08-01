DROP DATABASE IF EXISTS welp;

CREATE DATABASE welp;

USE welp;

CREATE table Restaurants (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    restaurant VARCHAR(255)
);



-- to run this file: navigate to the directory that contains shchema.sql
-- and run from terminal: run: mysql -u root < schema.sql