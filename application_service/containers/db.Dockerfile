# Use the official PostgreSQL 15.5 image as the base image
FROM postgres:15.5

# Environment variables to configure PostgreSQL
ENV POSTGRES_DB=application
ENV POSTGRES_USER=db_user
ENV POSTGRES_PASSWORD="asd123zxc123/./,z/"



# Expose PostgreSQL default port
EXPOSE 5432