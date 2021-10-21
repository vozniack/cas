CREATE TABLE users
(
    id         UUID         NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

    email      VARCHAR(255) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL,

    first_name VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL
);

INSERT INTO users (id, email, password, first_name, last_name)
VALUES (gen_random_uuid(), 'john.doe@vozniack.dev', 'pass123!', 'John', 'Doe');