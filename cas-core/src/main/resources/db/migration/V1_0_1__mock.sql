/* Document Management System and Document Printer System set */

INSERT INTO organizations (id, name, description, code, parent_id)
VALUES ('238a882e-f4e9-4107-920f-3bb2bb206b70', 'Document Management System',
        'Company main system for documents management', 'DMS', null),
       ('28e00094-259d-4516-a04e-ab5876e1e1dd', 'Document Printer System',
        'Microservice for documents rendering', 'DPS', '238a882e-f4e9-4107-920f-3bb2bb206b70');


INSERT INTO roles (id, name, description, organization_id)
VALUES ('9c576336-8241-46ca-9c6d-dcf8838a31bb', 'ADMIN', 'Document Management System administrator role',
        '238a882e-f4e9-4107-920f-3bb2bb206b70'),
       ('e61c99dd-16c0-4864-9aa0-b68f010aa5e0', 'USER', 'Document Management System user role',
        '238a882e-f4e9-4107-920f-3bb2bb206b70'),

       ('fd1dfafd-0572-4a9e-84ca-78a8f124c599', 'USER', 'Document Printer System administrator role',
        '28e00094-259d-4516-a04e-ab5876e1e1dd');


INSERT INTO users (id, email, password, first_name, last_name, organization_id)
VALUES ('1a93ab84-9ee4-43d3-b0a2-328f9b02b125', 'lois.wood@dms.com',
        '$2y$10$mbXVHXCEUCufdWQzkd2wNee7A5wx2hr2y6nRkLbWjx/lr.JdeF81y', 'Lois', 'Wood',
        '238a882e-f4e9-4107-920f-3bb2bb206b70'),

       ('d8d5ba29-61e4-4da1-9253-7420aaac43d9', 'kristina.wilkinson@dms.com',
        '$2y$10$mbXVHXCEUCufdWQzkd2wNee7A5wx2hr2y6nRkLbWjx/lr.JdeF81y', 'Kristina ', 'Wilkinson',
        '238a882e-f4e9-4107-920f-3bb2bb206b70'),

       ('5c6920e0-ea21-46f6-8e12-4969e5222d53', 'alister.navarro@dms.com',
        '$2y$10$mbXVHXCEUCufdWQzkd2wNee7A5wx2hr2y6nRkLbWjx/lr.JdeF81y', 'Alister ', 'Navarro',
        '238a882e-f4e9-4107-920f-3bb2bb206b70'),

       ('e9e3eb89-0bb9-457a-9f56-dad1edbd6009', 'jamal.stuart@dms.com',
        '$2y$10$mbXVHXCEUCufdWQzkd2wNee7A5wx2hr2y6nRkLbWjx/lr.JdeF81y', 'Jamal ', 'Stuart',
        '238a882e-f4e9-4107-920f-3bb2bb206b70'),

       ('37fd81d4-6862-42c1-ac57-5a8e87b24ce2', 'jerry.blackmore@dms.com',
        '$2y$10$mbXVHXCEUCufdWQzkd2wNee7A5wx2hr2y6nRkLbWjx/lr.JdeF81y', 'Jerry ', 'Blackmore',
        '238a882e-f4e9-4107-920f-3bb2bb206b70'),

       ('c66f003f-667d-4a51-b15d-0705e17359ca', 'elizabeth.morgan@dms.com',
        '$2y$10$mbXVHXCEUCufdWQzkd2wNee7A5wx2hr2y6nRkLbWjx/lr.JdeF81y', 'Elizabeth ', 'Morgan',
        '238a882e-f4e9-4107-920f-3bb2bb206b70'),


       ('eb302e95-eba0-4bb7-a3b7-8abeb9bfd2e4', 'gabriela.tyson@dms.com',
        '$2y$10$mbXVHXCEUCufdWQzkd2wNee7A5wx2hr2y6nRkLbWjx/lr.JdeF81y', 'Gabriela ', 'Tyson',
        '28e00094-259d-4516-a04e-ab5876e1e1dd'),

       ('6a8be0d3-9266-4e2d-87d4-85a55ce22571', 'emmie.dunlap@dms.com',
        '$2y$10$mbXVHXCEUCufdWQzkd2wNee7A5wx2hr2y6nRkLbWjx/lr.JdeF81y', 'Emmie ', 'Dunlap',
        '28e00094-259d-4516-a04e-ab5876e1e1dd');


INSERT INTO user_roles (user_id, role_id)
VALUES ('1a93ab84-9ee4-43d3-b0a2-328f9b02b125', '9c576336-8241-46ca-9c6d-dcf8838a31bb'),

       ('5c6920e0-ea21-46f6-8e12-4969e5222d53', 'e61c99dd-16c0-4864-9aa0-b68f010aa5e0'),
       ('e9e3eb89-0bb9-457a-9f56-dad1edbd6009', 'e61c99dd-16c0-4864-9aa0-b68f010aa5e0'),
       ('37fd81d4-6862-42c1-ac57-5a8e87b24ce2', 'e61c99dd-16c0-4864-9aa0-b68f010aa5e0'),
       ('c66f003f-667d-4a51-b15d-0705e17359ca', 'e61c99dd-16c0-4864-9aa0-b68f010aa5e0'),

       ('d8d5ba29-61e4-4da1-9253-7420aaac43d9', '9c576336-8241-46ca-9c6d-dcf8838a31bb'),

       ('e9e3eb89-0bb9-457a-9f56-dad1edbd6009', 'fd1dfafd-0572-4a9e-84ca-78a8f124c599'),
       ('eb302e95-eba0-4bb7-a3b7-8abeb9bfd2e4', 'fd1dfafd-0572-4a9e-84ca-78a8f124c599'),
       ('6a8be0d3-9266-4e2d-87d4-85a55ce22571', 'fd1dfafd-0572-4a9e-84ca-78a8f124c599');


INSERT INTO privileges (id, name, code, description, index, organization_id, parent_id)
VALUES ('ab6d2b65-2019-453a-91f6-37af61c2e743', 'Login', 'LOGIN',
        'Right to access the application', 0, '238a882e-f4e9-4107-920f-3bb2bb206b70', null),

       ('2fa62938-850f-4c8a-9c72-d4d1d868c75b', 'Manage documents', 'MANAGE_DOCUMENTS',
        'Document management privileges set', 1, '238a882e-f4e9-4107-920f-3bb2bb206b70', null),

       ('ebb4afc1-50cf-49d5-9bcb-460f518e4fc3', 'Read document', 'READ_DOCUMENT',
        'Right to read document', 0, '238a882e-f4e9-4107-920f-3bb2bb206b70',
        '2fa62938-850f-4c8a-9c72-d4d1d868c75b'),
       ('2b023013-7cac-475c-9501-c3eb712a0ef0', 'Create document', 'CREATE_DOCUMENT',
        'Right to create document', 1, '238a882e-f4e9-4107-920f-3bb2bb206b70',
        '2fa62938-850f-4c8a-9c72-d4d1d868c75b'),
       ('fc8fb65c-b8e8-4fc0-a2d9-ee84ecfb0f21', 'Update document', 'UPDATE_DOCUMENT',
        'Right to update document', 2, '238a882e-f4e9-4107-920f-3bb2bb206b70',
        '2fa62938-850f-4c8a-9c72-d4d1d868c75b'),
       ('68fe83da-5a60-46e4-9f21-f88b22a2b5b0', 'Delete document', 'DELETE_DOCUMENT',
        'Right to delete document', 3, '238a882e-f4e9-4107-920f-3bb2bb206b70',
        '2fa62938-850f-4c8a-9c72-d4d1d868c75b'),

       ('cc3a0de1-9ab6-4d65-a1db-b0389fdce955', 'Manage invoices', 'MANAGE_INVOICES',
        'Invoices management privileges set', 2, '238a882e-f4e9-4107-920f-3bb2bb206b70', null),

       ('c0f678fe-5c84-4b52-a252-8a547866a02e', 'Read invoice', 'READ_INVOICE',
        'Right to read invoice', 0, '238a882e-f4e9-4107-920f-3bb2bb206b70',
        'cc3a0de1-9ab6-4d65-a1db-b0389fdce955'),
       ('fdbfaba5-6ce8-416d-8b79-dc50963d0933', 'Create invoice', 'CREATE_INVOICE',
        'Right to create invoice', 1, '238a882e-f4e9-4107-920f-3bb2bb206b70',
        'cc3a0de1-9ab6-4d65-a1db-b0389fdce955'),
       ('be367218-ecfc-4857-979c-87ed84bffdc1', 'Update invoice', 'UPDATE_INVOICE',
        'Right to update invoice', 2, '238a882e-f4e9-4107-920f-3bb2bb206b70',
        'cc3a0de1-9ab6-4d65-a1db-b0389fdce955'),
       ('9e4eb12c-05e1-4b3b-b005-20472f5331f4', 'Delete invoice', 'DELETE_INVOICE',
        'Right to delete invoice', 3, '238a882e-f4e9-4107-920f-3bb2bb206b70',
        'cc3a0de1-9ab6-4d65-a1db-b0389fdce955'),

       ('b4456ab5-6c35-4aad-a891-5bf2b7682cf4', 'Login', 'LOGIN',
        'Right to access the application', 0, '28e00094-259d-4516-a04e-ab5876e1e1dd', null),

       ('36db82ba-d81f-489b-b700-8f5e000f2cb6', 'Print documents', 'PRINT_DOCUMENTS',
        'Printing different types of documents set', 1, '28e00094-259d-4516-a04e-ab5876e1e1dd', null),

       ('07823f93-1465-45d8-8673-bbfc48cf59af', 'Print contract', 'PRINT_CONTRACT',
        'Right to print the contract', 0, '28e00094-259d-4516-a04e-ab5876e1e1dd',
        '36db82ba-d81f-489b-b700-8f5e000f2cb6'),
       ('ede4c8a2-0cc7-43d5-8861-b8b5f22624cc', 'Print invoice', 'PRINT_INVOICE',
        'Right to print the invoice', 1, '28e00094-259d-4516-a04e-ab5876e1e1dd',
        '36db82ba-d81f-489b-b700-8f5e000f2cb6'),
       ('205578de-c259-48a4-85fb-d4e0920f1161', 'Print report', 'PRINT_REPORT',
        'Right to print the report', 2, '28e00094-259d-4516-a04e-ab5876e1e1dd',
        '36db82ba-d81f-489b-b700-8f5e000f2cb6');


INSERT INTO user_privileges (user_id, privilege_id)
VALUES ('1a93ab84-9ee4-43d3-b0a2-328f9b02b125', 'ab6d2b65-2019-453a-91f6-37af61c2e743'),
       ('5c6920e0-ea21-46f6-8e12-4969e5222d53', 'ab6d2b65-2019-453a-91f6-37af61c2e743'),
       ('e9e3eb89-0bb9-457a-9f56-dad1edbd6009', 'ab6d2b65-2019-453a-91f6-37af61c2e743'),
       ('37fd81d4-6862-42c1-ac57-5a8e87b24ce2', 'ab6d2b65-2019-453a-91f6-37af61c2e743'),
       ('c66f003f-667d-4a51-b15d-0705e17359ca', 'ab6d2b65-2019-453a-91f6-37af61c2e743'),

       ('d8d5ba29-61e4-4da1-9253-7420aaac43d9', 'b4456ab5-6c35-4aad-a891-5bf2b7682cf4'),
       ('eb302e95-eba0-4bb7-a3b7-8abeb9bfd2e4', 'b4456ab5-6c35-4aad-a891-5bf2b7682cf4'),
       ('6a8be0d3-9266-4e2d-87d4-85a55ce22571', 'b4456ab5-6c35-4aad-a891-5bf2b7682cf4');


INSERT INTO role_privileges (role_id, privilege_id)
VALUES ('9c576336-8241-46ca-9c6d-dcf8838a31bb', '2fa62938-850f-4c8a-9c72-d4d1d868c75b'),
       ('9c576336-8241-46ca-9c6d-dcf8838a31bb', 'cc3a0de1-9ab6-4d65-a1db-b0389fdce955'),

       ('e61c99dd-16c0-4864-9aa0-b68f010aa5e0', '2fa62938-850f-4c8a-9c72-d4d1d868c75b'),
       ('e61c99dd-16c0-4864-9aa0-b68f010aa5e0', 'cc3a0de1-9ab6-4d65-a1db-b0389fdce955'),

       ('fd1dfafd-0572-4a9e-84ca-78a8f124c599', '36db82ba-d81f-489b-b700-8f5e000f2cb6');


/* Mailbox System set */

INSERT INTO organizations (id, name, description, code, parent_id)
VALUES ('d118dd75-b96b-42fd-9ba1-8117c740997a', 'Mailbox System', 'Simple mailbox', 'MBS', null);


INSERT INTO roles (id, name, description, organization_id)
VALUES ('9fb4dbd4-db7c-4088-9404-2cb05d40373d', 'SYSTEM', 'Mailbox system microservice role',
        'd118dd75-b96b-42fd-9ba1-8117c740997a');


INSERT INTO users (id, email, password, first_name, last_name, organization_id)
VALUES ('306d03dc-61cd-4e52-b2ac-d8a431e9ff46', 'mailbox@dms.com',
        '$2y$10$mbXVHXCEUCufdWQzkd2wNee7A5wx2hr2y6nRkLbWjx/lr.JdeF81y', 'Mailbox', null,
        'd118dd75-b96b-42fd-9ba1-8117c740997a');


INSERT INTO user_roles (user_id, role_id)
VALUES ('306d03dc-61cd-4e52-b2ac-d8a431e9ff46', '9fb4dbd4-db7c-4088-9404-2cb05d40373d');


INSERT INTO privileges (id, name, code, description, index, organization_id, parent_id)
VALUES ('b9e4bc01-bd09-4573-8a3e-25289de62dce', 'Login', 'LOGIN',
        'Right to access the application', 0, 'd118dd75-b96b-42fd-9ba1-8117c740997a', null),

       ('c73992de-b68a-40b6-80a8-0a06e37dabe5', 'Mailbox operations set', 'MAILBOX',
        'Mailbox operations privileges set', 1, 'd118dd75-b96b-42fd-9ba1-8117c740997a', null),

       ('a5bf0aa2-867c-4223-814c-e7e93b72bbca', 'Read email', 'READ_EMAIL',
        'Right to read an email', 0, 'd118dd75-b96b-42fd-9ba1-8117c740997a',
        'c73992de-b68a-40b6-80a8-0a06e37dabe5'),
       ('681f85e6-9129-4f19-9ec3-4ab60c759566', 'Send email', 'SEND_EMAIL',
        'Right to send an email', 1, 'd118dd75-b96b-42fd-9ba1-8117c740997a',
        'c73992de-b68a-40b6-80a8-0a06e37dabe5'),
       ('5b2b385f-3f94-453e-a732-83fb5d8c5954', 'Delete email', 'DELETE_EMAIL',
        'Right to delete an email', 2, 'd118dd75-b96b-42fd-9ba1-8117c740997a',
        'c73992de-b68a-40b6-80a8-0a06e37dabe5'),
       ('ef20ea97-4c10-45ac-a7c1-edb100e8ac64', 'Forward email', 'FORWARD_EMAIL',
        'Right to forward an email', 3, 'd118dd75-b96b-42fd-9ba1-8117c740997a',
        'c73992de-b68a-40b6-80a8-0a06e37dabe5');


INSERT INTO user_privileges (user_id, privilege_id)
VALUES ('306d03dc-61cd-4e52-b2ac-d8a431e9ff46', 'b9e4bc01-bd09-4573-8a3e-25289de62dce');


INSERT INTO role_privileges (role_id, privilege_id)
VALUES ('9fb4dbd4-db7c-4088-9404-2cb05d40373d', 'c73992de-b68a-40b6-80a8-0a06e37dabe5');