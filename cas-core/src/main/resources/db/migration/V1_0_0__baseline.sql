CREATE TABLE users
(
    id         UUID         NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

    email      VARCHAR(255) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL,

    first_name VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL
);

CREATE TABLE groups
(
    id          UUID         NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

    name        VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(1024)
);

CREATE TABLE user_groups
(
    user_id  UUID NOT NULL,
    group_id UUID NOT NULL,
    PRIMARY KEY (user_id, group_id),
    CONSTRAINT user_group_user_fk FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT user_group_group_fk FOREIGN KEY (group_id) REFERENCES groups (id)
);

INSERT INTO users (id, email, password, first_name, last_name)
VALUES ('4c054a99-83c8-49b1-8877-0b27822ed2a3', 'john.doe@vozniack.dev', 'pass123!', 'John', 'Doe');

INSERT INTO groups(id, name, description)
VALUES ('98fa7b2c-6caa-4852-b632-e5c05b507021', 'Administrator', 'CAS-Core management group');

INSERT INTO user_groups(user_id, group_id)
VALUES ('4c054a99-83c8-49b1-8877-0b27822ed2a3', '98fa7b2c-6caa-4852-b632-e5c05b507021');