https://www.youtube.com/watch?v=RySuQtMiBxQ



sudo su - postgres
postgres@aqsa:~$ psql

or 
sudo -u postgres psql

CREATE USER myuser1 WITH PASSWORD '123';


CREATE DATABASE mydb1 WITH OWNER myuser1 ENCODING='UTF8' LC_COLLATE='en_US.UTF8' LC_CTYPE='en_US.UTF8' TEMPLATE template0;

You can use only template0 to create new database with different encoding and locale:

CREATE DATABASE newdb
WITH OWNER = postgres
   ENCODING = 'UTF8'
   TABLESPACE = pg_default
   LC_COLLATE = 'zh_CN.UTF-8'
   CONNECTION LIMIT = -1
   TEMPLATE template0;

   check database \l+
   database list \list
   logout back previous  \q

   sudo su - postgres
   createuser --help
   createuser -P myuser2
    enter password =
    enter password agai
    createdb mydb2 -O myuser2

    psql -h 127.0.0.1 -U myuser1(username) mydb1(databasename)



