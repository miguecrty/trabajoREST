DROP DATABASE IF EXISTS trabajorest;
CREATE DATABASE trabajorest;
\c trabajorest;

DROP TABLE IF EXISTS contactos;
CREATE TABLE contactos(
num SERIAL,
nombre VARCHAR(20),
apellidos VARCHAR(20),
email VARCHAR(20),
telefono VARCHAR(10),
PRIMARY KEY (num));

INSERT INTO CONTACTOS (num, nombre, apellidos, email, telefono) VALUES
            (1,'Manuel','Fernandez','mfernandez@gmail.com','777454647');
INSERT INTO CONTACTOS (num, nombre, apellidos, email, telefono) VALUES
            (2,'Marcos','Rodriguez','mrodriguez@gmail.com','888454647');