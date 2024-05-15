FROM docker.io/postgres:latest

# Configura las variables de entorno para la contraseña de PostgreSQL
ENV POSTGRES_PASSWORD postgres
# Copia los scripts de inicialización de la base de datos al contenedor
COPY ./svc_bbdd /docker-entrypoint-initdb.d/

# Expone el puerto 5432 para permitir conexiones externas
EXPOSE 5432
