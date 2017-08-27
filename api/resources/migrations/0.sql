CREATE TABLE users (
    id          serial firstkey PRIMARY KEY,
    username    char(255) NOT NULL,
    first_name  char(255) NOT NULL,
    last_name   char(255),
    last_name   char(255),
    email       char(255),
    signup_date date
);
