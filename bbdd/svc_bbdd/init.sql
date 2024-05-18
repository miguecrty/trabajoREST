DROP DATABASE IF EXISTS trabajorest;
CREATE DATABASE trabajorest;
\c trabajorest;

DROP TABLE IF EXISTS contactos;
CREATE TABLE contactos(
id SERIAL,
nombre_usu VARCHAR(20),
clave VARCHAR(20),
nombre VARCHAR(20),
apellido VARCHAR(20),
email VARCHAR(20),
telefono VARCHAR(20),
imagen TEXT,
estado VARCHAR(70),
PRIMARY KEY (id,nombre_usu));

DROP TABLE IF EXISTS chat;
CREATE TABLE chat(
id SERIAL,
nombre_usu VARCHAR(20),
hora TEXT,
mensaje TEXT,
PRIMARY KEY (id));


INSERT INTO CONTACTOS (nombre_usu, clave, nombre, apellido, email, telefono, imagen, estado) VALUES
            ('usuario','clave','Usuario','UsuUsu','usuario@gmail.com','654321234', 'https://disfracestorrente.com/147275-large_default/sombrero-moro-rojo.jpg','La vida hay que vivirla, por eso estoy así de vividor jajaja!!');
INSERT INTO CONTACTOS (nombre_usu, clave, nombre, apellido, email, telefono, imagen, estado) VALUES
            ('manuel','clave','Manuel','Fernandez','mfernandez@gmail.com','777454647','https://c.superprof.com/i/a/1307672/578364/600/20221207162809/profesor-japones-nativo-con-experiencia-clase-japonesa-los-estudiantes-mexicanos.jpg','Le treice do Novembre ma cumple yeeeeeeeeessss');
INSERT INTO CONTACTOS (nombre_usu, clave, nombre, apellido, email, telefono, imagen, estado) VALUES
            ('marcos','clave','Marcos','Rodriguez','mrodriguez@gmail.com','888454647','https://cdn.milenio.com/uploads/media/2023/05/26/daniel-bameyi-jugador-nigeriano-acusado.jpg','En Europa soy un Don Dale, eeeeeh');