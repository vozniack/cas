/* Schema */

CREATE TABLE users
(
    id         UUID         NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

    scope      VARCHAR(255) NOT NULL             DEFAULT 'EXTERNAL',

    email      VARCHAR(255) NOT NULL UNIQUE,
    password   VARCHAR(255),

    first_name VARCHAR(255),
    last_name  VARCHAR(255),

    created_at TIMESTAMP    NOT NULL             DEFAULT now(),
    updated_at TIMESTAMP    NOT NULL             DEFAULT now()
);

CREATE TABLE roles
(
    id          UUID         NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

    scope       VARCHAR(255) NOT NULL             DEFAULT 'EXTERNAL',

    name        VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(1024),

    created_at  TIMESTAMP    NOT NULL             DEFAULT now(),
    updated_at  TIMESTAMP    NOT NULL             DEFAULT now()
);

CREATE TABLE privileges
(
    id          UUID         NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

    scope       VARCHAR(255) NOT NULL             DEFAULT 'EXTERNAL',

    name        VARCHAR(255) NOT NULL UNIQUE,
    code        VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(1024),

    index       INT          NOT NULL,

    parent_id   UUID,

    created_at  TIMESTAMP    NOT NULL             DEFAULT now(),
    updated_at  TIMESTAMP    NOT NULL             DEFAULT now(),

    CONSTRAINT privilege_parent_fk FOREIGN KEY (parent_id) REFERENCES privileges (id)
);

CREATE TABLE user_roles
(
    user_id UUID NOT NULL,
    role_id UUID NOT NULL,
    PRIMARY KEY (user_id, role_id),
    CONSTRAINT user_role_user_fk FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT user_role_role_fk FOREIGN KEY (role_id) REFERENCES roles (id)
);

CREATE TABLE user_privileges
(
    user_id      UUID NOT NULL,
    privilege_id UUID NOT NULL,

    PRIMARY KEY (user_id, privilege_id),

    CONSTRAINT user_privilege_user_fk FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT user_privilege_privilege_fk FOREIGN KEY (privilege_id) REFERENCES privileges (id)
);

CREATE TABLE role_privileges
(
    role_id      UUID NOT NULL,
    privilege_id UUID NOT NULL,

    PRIMARY KEY (role_id, privilege_id),

    CONSTRAINT role_privilege_role_fk FOREIGN KEY (role_id) REFERENCES roles (id),
    CONSTRAINT role_privilege_privilege_fk FOREIGN KEY (privilege_id) REFERENCES privileges (id)
);

/* Values */

INSERT INTO users (id, scope, email, password, first_name, last_name)
VALUES ('4c054a99-83c8-49b1-8877-0b27822ed2a3', 'INTERNAL', 'admin@cas.dev',
        '$2y$10$iSAQDDcM5LJDZyfUUtYgRemRg5TqEicwC.GkXtU7giOrZrMRXRfG.', 'John', 'Doe');

INSERT INTO roles (id, scope, name, description)
VALUES ('98fa7b2c-6caa-4852-b632-e5c05b507021', 'INTERNAL', 'ADMINISTRATOR', 'Central Authorization System main role');

INSERT INTO user_roles (user_id, role_id)
VALUES ('4c054a99-83c8-49b1-8877-0b27822ed2a3', '98fa7b2c-6caa-4852-b632-e5c05b507021');

INSERT INTO privileges (id, scope, name, code, description, index, parent_id)
VALUES ('39798f2b-df6f-4239-9736-138b245b151c', 'INTERNAL', 'Login', 'LOGIN',
        'Right to access the application', 0, null),

       ('80fbf8a7-efb6-44f1-b8fb-2db9cdbdd80c', 'INTERNAL', 'Manage users', 'MANAGE_USERS',
        'User management privilege set', 1, null),

       ('b52cebd3-7a86-4f08-a87a-8e13ba29eec0', 'INTERNAL', 'Show user', 'SHOW_USER',
        'Right to display users', 0, '80fbf8a7-efb6-44f1-b8fb-2db9cdbdd80c'),

       ('b5ff26bc-7ff6-4505-800d-10743b839d5e', 'INTERNAL', 'Create user', 'CREATE_USER',
        'Right to create users', 1, '80fbf8a7-efb6-44f1-b8fb-2db9cdbdd80c'),

       ('1e7f623e-1dc3-4a43-974f-3888bfc6c371', 'INTERNAL', 'Edit user', 'EDIT_USER',
        'Right to edit users', 2, '80fbf8a7-efb6-44f1-b8fb-2db9cdbdd80c'),

       ('81a06d5c-8e79-436c-80a7-aa4605c1eb2e', 'INTERNAL', 'Remove user', 'REMOVE_USER',
        'Right to remove users', 3, '80fbf8a7-efb6-44f1-b8fb-2db9cdbdd80c'),

       ('4b2e19fa-79db-44b9-8bbf-6561a47b3cb9', 'INTERNAL', 'Manage groups', 'MANAGE_GROUPS',
        'Group management privilege set', 2, null),

       ('7eb13577-06b2-4b88-ad78-f1b99f951c6e', 'INTERNAL', 'Show group', 'SHOW_GROUP',
        'Right to display groups', 0, '4b2e19fa-79db-44b9-8bbf-6561a47b3cb9'),

       ('0d4e60b3-48f1-470c-94b7-167edd97bb1b', 'INTERNAL', 'Create group', 'CREATE_GROUP',
        'Right to create groups', 1, '4b2e19fa-79db-44b9-8bbf-6561a47b3cb9'),

       ('fe50c422-526b-4f7c-9482-8401cc704d25', 'INTERNAL', 'Edit group', 'EDIT_GROUP',
        'Right to edit groups', 2, '4b2e19fa-79db-44b9-8bbf-6561a47b3cb9'),

       ('59ce3239-abe4-4722-b408-6b01f4aca184', 'INTERNAL', 'Remove group', 'REMOVE_GROUP',
        'Right to remove groups', 3, '4b2e19fa-79db-44b9-8bbf-6561a47b3cb9'),

       ('32cb0e0a-4368-447c-ad00-2affe47e7d1d', 'INTERNAL', 'Manage privileges', 'MANAGE_PRIVILEGES',
        'Privilege management privilege set', 3, null),

       ('082493be-3d0c-4f12-8554-2e7cb87d76f9', 'INTERNAL', 'Show privilege', 'SHOW_PRIVILEGE',
        'Right to display privileges', 0, '32cb0e0a-4368-447c-ad00-2affe47e7d1d'),

       ('e12be999-5734-4b8f-80d0-3a83a54d6bc3', 'INTERNAL', 'Create privilege', 'CREATE_PRIVILEGE',
        'Right to create privileges', 1, '32cb0e0a-4368-447c-ad00-2affe47e7d1d'),

       ('33989dd4-708a-4717-a294-476c486ffdb8', 'INTERNAL', 'Edit privilege', 'EDIT_PRIVILEGE',
        'Right to edit privileges', 2, '32cb0e0a-4368-447c-ad00-2affe47e7d1d'),

       ('2884d2ef-9b95-4206-a0c0-5a9cece202cb', 'INTERNAL', 'Remove privilege', 'REMOVE_PRIVILEGE',
        'Right to remove privileges', 3, '32cb0e0a-4368-447c-ad00-2affe47e7d1d');

INSERT INTO user_privileges (user_id, privilege_id)
VALUES ('4c054a99-83c8-49b1-8877-0b27822ed2a3', '39798f2b-df6f-4239-9736-138b245b151c');

INSERT INTO role_privileges (role_id, privilege_id)
VALUES ('98fa7b2c-6caa-4852-b632-e5c05b507021', '80fbf8a7-efb6-44f1-b8fb-2db9cdbdd80c'),
       ('98fa7b2c-6caa-4852-b632-e5c05b507021', '4b2e19fa-79db-44b9-8bbf-6561a47b3cb9'),
       ('98fa7b2c-6caa-4852-b632-e5c05b507021', '32cb0e0a-4368-447c-ad00-2affe47e7d1d');