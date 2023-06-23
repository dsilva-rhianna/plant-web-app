const db = require("./db_connection");

const drop_plants_table_sql = "DROP TABLE IF EXISTS plants;"

db.execute(drop_plants_table_sql);

const drop_categories_table_sql = "DROP TABLE IF EXISTS categories;"

db.execute(drop_categories_table_sql);

const create_categories_table_sql = `
    CREATE TABLE categories (
        categoryId INT NOT NULL AUTO_INCREMENT,
        categoryName VARCHAR(45) NOT NULL,
        PRIMARY KEY (categoryId));
`

db.execute(create_categories_table_sql);

const create_plants_table_sql = `
    CREATE TABLE plants (
        plantId INT NOT NULL AUTO_INCREMENT,
        plantName VARCHAR(45) NOT NULL,
        categoryId INT NOT NULL,
        lastDate DATE NOT NULL,
        requirements VARCHAR(150) NULL,
        PRIMARY KEY (plantId),
        INDEX plantCategory_idx (categoryId ASC),
        CONSTRAINT plantCategory
            FOREIGN KEY (categoryId)
            REFERENCES categories (categoryId)
            ON DELETE RESTRICT
            ON UPDATE CASCADE);
`

db.execute(create_plants_table_sql);

db.end();