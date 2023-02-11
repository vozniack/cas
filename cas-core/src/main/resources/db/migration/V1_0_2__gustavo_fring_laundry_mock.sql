/* Los Pollos Hermanos Company */

INSERT INTO organizations (id, name, description, code, parent_id)
VALUES ('dd4f50ea-786c-409e-9f2f-fe119188edc6', 'Los Pollos Hermanos',
        'Los Pollos Hermanos company actions', 'LPH', null);

INSERT INTO roles (id, name, code, description, organization_id)
VALUES ('7d4899af-e885-40fa-8406-92da716babde', 'Chief Executive Officer', 'CEO',
        'main management position of the company', 'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('3c714588-de4e-4e68-9f02-a4ad8e506650', 'Chef', 'CHEF',
        'Chef in the lab', 'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('056c6f8a-8ecd-43f1-abbf-00702be9fa82', 'Accountant', 'ACCOUNTANT',
        'Company accountant', 'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('ebfbfb3a-8f1b-4cd3-87bf-90310391385e', 'Lawyer', 'LAWYER',
        'Company lawyer', 'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('abe7a356-344d-440f-897b-a3a26a55f6d8', 'Special operations', 'SPECOPS',
        'Company special operations', 'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('5d657fca-d607-442a-ab11-6b5cba424781', 'Salesman', 'SALESMAN',
        'Chicken wings salesman', 'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('779a918a-b655-4fa5-bcc5-55e63af6e7d9', 'Auxiliary', 'AUXILIARY',
        'Company basic assistant', 'dd4f50ea-786c-409e-9f2f-fe119188edc6');

INSERT INTO users (id, email, password, first_name, last_name, organization_id)
VALUES ('dd07df45-8856-48cd-aa4f-8fcdd6043317', 'gustavo.fring@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Gustavo', 'Fring',
        'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('24f00550-6a3f-4428-809e-fbdef7e01c2d', 'walter.white@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Walter', 'White',
        'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('2975c70e-f878-45e6-82df-3a77eb33df05', 'jesse.pinkman@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Jesse', 'Pinkman',
        'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('41dbfa5a-8edd-4193-8809-78e6016d70f6', 'galle.boetticher@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Galle', 'Boetticher',
        'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('c722f989-eb6c-4dcc-b6aa-01cca9223823', 'skyler.white@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Skyler', 'White',
        'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('5b9b4df3-1765-463b-a9f2-31c9e90fb33b', 'saul.goodman@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Saul', 'Goodman',
        'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('0352f959-ab10-4f88-b47a-aaeebfd6491e', 'francesca.liddy@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Francesca', 'Liddy',
        'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('a3fb4e66-491f-48c9-a623-a6c61740efbd', 'mike.ehrmantraut@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Mike', 'Ehrmantraut',
        'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('f29a4f8d-585a-40a2-b11c-83f65f6eb3c8', 'tyrus.kitt@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Tyrus', 'Kitt',
        'dd4f50ea-786c-409e-9f2f-fe119188edc6'),
       ('95a5bf84-8b55-4e72-a07d-3e3b0da4b0e9', 'victor@gflaundry.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'Victor', null,
        'dd4f50ea-786c-409e-9f2f-fe119188edc6');

INSERT INTO privileges (id, name, code, description, index, organization_id, parent_id)
VALUES ('9e1f9677-f9c3-4565-9046-ba4ad602163f', 'Manage company', 'MANAGE_COMPANY',
        '', 0, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),
       ('82803632-8b28-4e9d-88ec-16be816db4c7', 'Explore new markets', 'EXPLORE_MARKETS',
        '', 0, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', '9e1f9677-f9c3-4565-9046-ba4ad602163f'),
       ('f2cc0c0a-24cc-439d-8bde-e8ea2f61c236', 'Negotiate with services', 'NEGOTIATE',
        '', 1, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', '9e1f9677-f9c3-4565-9046-ba4ad602163f'),
       ('3bb1faeb-ab5f-492e-ae3b-70a38e6709c1', 'Manage staff', 'MANAGE_STAFF',
        '', 2, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', '9e1f9677-f9c3-4565-9046-ba4ad602163f'),

       ('8d499bea-08a9-4651-b079-9449e1b2d8d4', 'Cook dishes', 'COOK',
        '', 1, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),
       ('786f771e-796d-4942-83ad-da0aaf811349', 'Invent recipes', 'INVENT_RECIPES',
        '', 0, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', '8d499bea-08a9-4651-b079-9449e1b2d8d4'),
       ('bb4dfef6-2b21-4ed3-97c5-45db8ec064a8', 'Care of deadlines', 'CARE_DEADLINES',
        '', 1, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', '8d499bea-08a9-4651-b079-9449e1b2d8d4'),

       ('ad0398b9-04bb-41f0-bb55-68089f34a347', 'Manage bills', 'MANAGE_BILLS',
        '', 2, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),
       ('f9fa3517-8e3b-4da0-b01f-03134f3193df', 'Manage customers', 'MANAGE_CUSTOMERS',
        '', 3, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),

       ('e1ecef30-5ec5-448f-9e64-60fd67e5c83c', 'Manage documents', 'MANAGE_DOCUMENTS',
        '', 4, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),
       ('8bb25ed8-927e-46a2-9d1a-b0bf6c06e367', 'Falsify documents', 'FALSIFY_DOCUMENTS',
        '', 0, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', 'e1ecef30-5ec5-448f-9e64-60fd67e5c83c'),
       ('60353e2b-d3aa-4a1a-9c2d-274f791fc94d', 'Testify in court', 'TESTIFY_COURT',
        '', 1, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', 'e1ecef30-5ec5-448f-9e64-60fd67e5c83c'),
       ('c3964525-34c5-4db1-9b4c-157e835807ed', 'Be afraid', 'BE_AFRAID',
        '', 2, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', 'e1ecef30-5ec5-448f-9e64-60fd67e5c83c'),

       ('a7377a95-e92c-4eb4-b3b3-11d96d2b9e8a', 'Talk to whoever it takes', 'TALK',
        '', 5, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),
       ('ff3524f9-fd3a-4ac4-8a03-6b3f38e0450c', 'Deal with sensitive cases', 'DEAL_WITH',
        '', 6, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),

       ('f3b6a590-65a6-4ebe-b8b9-73e5b021eccb', 'Sell chicken wings', 'SELL_WINGS',
        '', 7, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),
       ('53381010-1576-4cb0-8c1b-a8baab44c0b9', 'Share in charity', 'CHARITY',
        '', 8, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),

       ('b48de428-d31b-46b0-a8af-71dc96ce4a4f', 'Shoot strangers', 'SHOOT_STRANGERS',
        '', 9, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),
       ('541f48bc-2089-4461-80a5-f0615cf6c0a3', 'Make chaos', 'MAKE_CHAOS',
        '', 10, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),

       ('43a0b7cb-edda-487a-9b20-2f829c9ed925', 'Survive', 'SURVIVE',
        '', 11, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', null),
       ('09a6bbdb-f449-4744-8981-1f7f3c9a81f9', 'Watch the competition', 'WATCH_COMPETITION',
        '', 0, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', '43a0b7cb-edda-487a-9b20-2f829c9ed925'),
       ('cea8479b-9b1d-4443-a3dc-ffed386c8856', 'Get along with people', 'GET_ALONG',
        '', 1, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', '43a0b7cb-edda-487a-9b20-2f829c9ed925'),
       ('5edbab18-08c2-4d69-ba06-abe117b10a7e', 'Avoid Hank', 'AVOID_HANK',
        '', 2, 'dd4f50ea-786c-409e-9f2f-fe119188edc6', '43a0b7cb-edda-487a-9b20-2f829c9ed925');

INSERT INTO user_roles (user_id, role_id)
VALUES ('dd07df45-8856-48cd-aa4f-8fcdd6043317', '7d4899af-e885-40fa-8406-92da716babde'),
       ('dd07df45-8856-48cd-aa4f-8fcdd6043317', '5d657fca-d607-442a-ab11-6b5cba424781'),

       ('24f00550-6a3f-4428-809e-fbdef7e01c2d', '3c714588-de4e-4e68-9f02-a4ad8e506650'),
       ('2975c70e-f878-45e6-82df-3a77eb33df05', '3c714588-de4e-4e68-9f02-a4ad8e506650'),
       ('41dbfa5a-8edd-4193-8809-78e6016d70f6', '3c714588-de4e-4e68-9f02-a4ad8e506650'),

       ('c722f989-eb6c-4dcc-b6aa-01cca9223823', '056c6f8a-8ecd-43f1-abbf-00702be9fa82'),

       ('5b9b4df3-1765-463b-a9f2-31c9e90fb33b', 'ebfbfb3a-8f1b-4cd3-87bf-90310391385e'),
       ('0352f959-ab10-4f88-b47a-aaeebfd6491e', 'ebfbfb3a-8f1b-4cd3-87bf-90310391385e'),

       ('a3fb4e66-491f-48c9-a623-a6c61740efbd', 'abe7a356-344d-440f-897b-a3a26a55f6d8'),

       ('f29a4f8d-585a-40a2-b11c-83f65f6eb3c8', '779a918a-b655-4fa5-bcc5-55e63af6e7d9'),
       ('95a5bf84-8b55-4e72-a07d-3e3b0da4b0e9', '779a918a-b655-4fa5-bcc5-55e63af6e7d9');

INSERT INTO role_privileges (role_id, privilege_id, excluded)
VALUES ('7d4899af-e885-40fa-8406-92da716babde', '9e1f9677-f9c3-4565-9046-ba4ad602163f', false),

       ('3c714588-de4e-4e68-9f02-a4ad8e506650', '8d499bea-08a9-4651-b079-9449e1b2d8d4', false),

       ('056c6f8a-8ecd-43f1-abbf-00702be9fa82', 'ad0398b9-04bb-41f0-bb55-68089f34a347', false),
       ('056c6f8a-8ecd-43f1-abbf-00702be9fa82', 'f9fa3517-8e3b-4da0-b01f-03134f3193df', false),

       ('ebfbfb3a-8f1b-4cd3-87bf-90310391385e', 'e1ecef30-5ec5-448f-9e64-60fd67e5c83c', false),

       ('abe7a356-344d-440f-897b-a3a26a55f6d8', 'a7377a95-e92c-4eb4-b3b3-11d96d2b9e8a', false),
       ('abe7a356-344d-440f-897b-a3a26a55f6d8', 'ff3524f9-fd3a-4ac4-8a03-6b3f38e0450c', false),

       ('5d657fca-d607-442a-ab11-6b5cba424781', 'f3b6a590-65a6-4ebe-b8b9-73e5b021eccb', false),
       ('5d657fca-d607-442a-ab11-6b5cba424781', '53381010-1576-4cb0-8c1b-a8baab44c0b9', false),

       ('779a918a-b655-4fa5-bcc5-55e63af6e7d9', 'b48de428-d31b-46b0-a8af-71dc96ce4a4f', false),
       ('779a918a-b655-4fa5-bcc5-55e63af6e7d9', '541f48bc-2089-4461-80a5-f0615cf6c0a3', false);

INSERT INTO user_privileges (user_id, privilege_id, excluded)
VALUES ('24f00550-6a3f-4428-809e-fbdef7e01c2d', '43a0b7cb-edda-487a-9b20-2f829c9ed925', false),

       ('2975c70e-f878-45e6-82df-3a77eb33df05', '5edbab18-08c2-4d69-ba06-abe117b10a7e', false),

       ('41dbfa5a-8edd-4193-8809-78e6016d70f6', 'bb4dfef6-2b21-4ed3-97c5-45db8ec064a8', true),

       ('0352f959-ab10-4f88-b47a-aaeebfd6491e', 'c3964525-34c5-4db1-9b4c-157e835807ed', true),

       ('f29a4f8d-585a-40a2-b11c-83f65f6eb3c8', 'b48de428-d31b-46b0-a8af-71dc96ce4a4f', true);