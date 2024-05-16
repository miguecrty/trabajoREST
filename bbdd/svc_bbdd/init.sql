DROP DATABASE IF EXISTS trabajorest;
CREATE DATABASE trabajorest;
\c trabajorest;

DROP TABLE IF EXISTS contactos;
CREATE TABLE contactos(
nombre_usu VARCHAR(20),
clave VARCHAR(20),
nombre VARCHAR(20),
apellido VARCHAR(20),
email VARCHAR(20),
telefono VARCHAR(10),
PRIMARY KEY (nombre_usu));


INSERT INTO CONTACTOS (nombre_usu, clave, nombre, apellido, email, telefono) VALUES
            ('usuario','clave','Usuario','UsuUsu','usuario@gmail.com','654321234');
INSERT INTO CONTACTOS (nombre_usu, clave, nombre, apellido, email, telefono) VALUES
            ('manuel','clave','Manuel','Fernandez','mfernandez@gmail.com','777454647');
INSERT INTO CONTACTOS (nombre_usu, clave, nombre, apellido, email, telefono) VALUES
            ('marcos','clave','Marcos','Rodriguez','mrodriguez@gmail.com','888454647');