/* Michael Scott Paper Company */

INSERT INTO organizations (id, name, description, code, icon, parent_id)
VALUES ('96bc2108-b5f8-46c5-9a58-ff2f44697962', 'Michael Scott Paper Company',
        'Paper Company management actions', 'MSPC', 'document-text-outline', null);

INSERT INTO roles (id, name, code, description, organization_id)
VALUES ('f11159da-2628-448b-979b-bf814beebcdf', 'Chief Executive Officer', 'CEO', 'Company founder role',
        '96bc2108-b5f8-46c5-9a58-ff2f44697962'),
       ('ee2c29e9-bbdd-45db-b8c7-ba86dddf0eed', 'Salesman', 'SALESMAN', 'Company basic operational role',
        '96bc2108-b5f8-46c5-9a58-ff2f44697962');

INSERT INTO privileges (id, name, code, description, index, organization_id, parent_id)
VALUES ('217d3f9d-d22d-4192-9c7a-0cfc93a8a549', 'Manage company', 'MANAGE_COMPANY',
        '', 0, '96bc2108-b5f8-46c5-9a58-ff2f44697962', null),
       ('4082a5a1-508a-4ec5-a4ec-a56515ec3931', 'Organise party', 'ORGANISE_PARTY',
        '', 1, '96bc2108-b5f8-46c5-9a58-ff2f44697962', '217d3f9d-d22d-4192-9c7a-0cfc93a8a549'),
       ('5341ea77-efe2-4fd5-b668-124dc9a60695', 'Solve conflicts', 'SOLVE_CONFLICTS',
        '', 3, '96bc2108-b5f8-46c5-9a58-ff2f44697962', '217d3f9d-d22d-4192-9c7a-0cfc93a8a549'),

       ('7005a4fd-7ac3-4579-9556-b5b13f56c6e5', 'Manage sales', 'MANAGE_SALES',
        '', 1, '96bc2108-b5f8-46c5-9a58-ff2f44697962', null),
       ('459aa79d-a41a-4b73-8b08-9d6f25417ca4', 'Make a sale', 'MAKE_SALE',
        '', 0, '96bc2108-b5f8-46c5-9a58-ff2f44697962', '7005a4fd-7ac3-4579-9556-b5b13f56c6e5'),
       ('a98d7da3-34e1-48d7-b77c-f85be41ff0fb', 'Find a client', 'FIND_CLIENT',
        '', 1, '96bc2108-b5f8-46c5-9a58-ff2f44697962', '7005a4fd-7ac3-4579-9556-b5b13f56c6e5');

INSERT INTO user_organizations(user_id, organization_id)
VALUES ('c6ac2055-9911-409a-9557-dcf750fdac97', '96bc2108-b5f8-46c5-9a58-ff2f44697962'),
       ('62c66369-7716-4b0d-9fd0-f008d23b9998', '96bc2108-b5f8-46c5-9a58-ff2f44697962'),
       ('4a032d84-9f26-451f-b3f4-62d467c45fc7', '96bc2108-b5f8-46c5-9a58-ff2f44697962');

INSERT INTO user_roles (user_id, role_id)
VALUES ('c6ac2055-9911-409a-9557-dcf750fdac97', 'f11159da-2628-448b-979b-bf814beebcdf'),

       ('62c66369-7716-4b0d-9fd0-f008d23b9998', 'ee2c29e9-bbdd-45db-b8c7-ba86dddf0eed'),
       ('4a032d84-9f26-451f-b3f4-62d467c45fc7', 'ee2c29e9-bbdd-45db-b8c7-ba86dddf0eed');

INSERT INTO role_privileges (role_id, privilege_id, excluded)
VALUES ('f11159da-2628-448b-979b-bf814beebcdf', '217d3f9d-d22d-4192-9c7a-0cfc93a8a549', false),
       ('ee2c29e9-bbdd-45db-b8c7-ba86dddf0eed', '7005a4fd-7ac3-4579-9556-b5b13f56c6e5', false);

INSERT INTO user_privileges (user_id, privilege_id, excluded)
VALUES ('c6ac2055-9911-409a-9557-dcf750fdac97', '459aa79d-a41a-4b73-8b08-9d6f25417ca4', false);
