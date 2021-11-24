CREATE DATABASE adopt; 

\c adodt

CREATE TABLE People(
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100),
    birthday VARCHAR(40),
    person VARCHAR(100),
    adopt VARCHAR(100)
);
-- CONSTRAINT fk_person FOREIGN KEY(person) references People(id),
-- CONSTRAINT fk_adopt FOREIGN KEY(adopt) references People(id)


INSERT INTO People (fullname, birthday)
VALUES ('Rodrigo Alejandro Vásquez Osorio', '1995-11-22');