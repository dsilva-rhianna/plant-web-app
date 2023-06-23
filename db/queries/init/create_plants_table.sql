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