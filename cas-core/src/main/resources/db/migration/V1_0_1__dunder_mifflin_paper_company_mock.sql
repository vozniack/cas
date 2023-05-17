/* Dunder Mifflin Paper Company */

INSERT INTO organizations (id, name, description, code, icon, parent_id)
VALUES ('dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'Dunder Mifflin Paper Company',
        'Paper Company management actions', 'DMPC', 'document-outline', null);

INSERT INTO roles (id, name, code, description, organization_id)
VALUES ('5dc26691-7582-4603-b7df-c81be19bb47f', 'Chief Executive Officer', 'CEO', '',
        'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('962458e4-8712-4b11-adc7-ac6b13ceefc8', 'Branch manager', 'MANAGER', '',
        'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('5954ae5d-a885-4587-ad95-5854f51e691d', 'Assistant to the regional manager', 'ASSIST_REG_MAN', '',
        'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('3bf63929-3f99-4b66-b7c2-ffe4cb25d14e', 'Salesman', 'SALESMAN', '',
        'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('249a15e1-c661-4e9d-96d4-e6d15c8194b2', 'Secretary', 'SECRETARY', '',
        'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('8fa5692c-bd10-41be-bf7a-ca74bbf4c871', 'Accountant', 'ACCOUNTANT', '',
        'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('f7915b5f-913b-4c4d-9065-b4891a29be4a', 'Party planning committee', 'PARTY_PLAN_COMM', '',
        'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('8bd91e7b-7855-4e00-a60b-e840ccb58fdc', 'Internship', 'TEMP', '',
        'dd6f01cf-9fca-4e7b-9da3-047dd7004494');

INSERT INTO users (id, email, password, first_name, last_name)
VALUES ('eb613176-2ebf-4756-adef-5694761ecc65', 'david.wallace@dundermifflin.com',
        '$2y$10$gEyH9IsPlWtJhc272Obu3uxv8mXXEPyVWG0MLUTsRfe6sNqSRlJFy', 'David', 'Wallace'),
       ('c6ac2055-9911-409a-9557-dcf750fdac97', 'michael.scott@dundermifflin.com',
        '$2y$10$0r.mQCdmZiJ5E4qiqKRal.5LsIXtqZG6B5ILadVaFj6cez08wi1Pm', 'Michael', 'Scott'),
       ('919dacea-a0fb-4202-87a3-bb2508f0e332', 'dwight.schrute@dundermifflin.com',
        '$2y$10$.qBVbUeY7vg0gvaIoQYlMOwPXjXqXoJrS9/omKPmI6yVQfuYonJHy', 'Dwight', 'Schrute'),
       ('683fd7de-ee87-4ac4-9968-e398674e99b5', 'jim.halpert@dundermifflin.com',
        '$2y$10$KorHPHsqoN06dkyYJR/JxeVqsFfzlsqlKeL2WFhRTjs/qOn14TyFa', 'Jim', 'Halpert'),
       ('9a7079b4-138f-4c0a-b73c-2469e33bcc0f', 'andy.bernard@dundermifflin.com',
        '$2y$10$i8Y6t1PukFsc8kVUePfDZ.1KSF3Cx/BYJqW7lbiduqmAAxjr7BC/m', 'Andy', 'Bernard'),
       ('d6986ced-3e15-49eb-a958-e26c695afae1', 'stanley.hudson@dundermifflin.com',
        '$2y$10$7BydkpSBffUekfAY4UeScuvmsBG8Sp3mhlxfpfORs3CmPadhCKv1q', 'Stanley', 'Hudson'),
       ('f6420b98-63ec-4d5f-a641-11df56a951b6', 'phyllis.vance@dundermifflin.com',
        '$2y$10$lLW/w23bNAXI2If4012FP.0WHkG8GfI.XcJeKpqVdcKRzugKLOoju', 'Phyllis', 'Vance'),
       ('62c66369-7716-4b0d-9fd0-f008d23b9998', 'pam.beesly@dundermifflin.com',
        '$2y$10$/t896gqZB0VEl/Pu2h7bBudoDH5Ar2NhfF/l3SVvTfFNlDEw5k18S', 'Pam', 'Beesly'),
       ('e24d07c5-4504-4254-8904-9d4e0bd50ec9', 'erin.hannon@dundermifflin.com',
        '$2y$10$3JPBra5B2/bQ7vsFtcF/zOHLwfX1QJ52h1ton9TiL0n1qGn2tMvIO', 'Erin', 'Hannon'),
       ('b372bc94-4f99-42e3-900c-0e3b3045707d', 'kevin.malone@dundermifflin.com',
        '$2y$10$3FvBcE/v.qh6giwjyQ5MpOMcWq8yP1NO83keD/LZhZ3awDkbnHpBu', 'Kevin', 'Malone'),
       ('b8092073-d220-434b-8956-8cc9760606cd', 'angela.martin@dundermifflin.com',
        '$2y$10$IPfzppVysjVBheeIpocZr.u5xoldQPbRLXc7JETAIEWKejOjvmLNa', 'Angela', 'Martin'),
       ('74dbc02d-c420-41b8-bd14-0f5b3ffdb76f', 'oscar.martinez@dundermifflin.com',
        '$2y$10$07R3WeaGPpmuvn9V7uGc1e43cMwm9eaQ.BotViCDWoPL0BxjOLKym', 'Oscar', 'Martinez'),
       ('9b7a24d8-3e9c-4732-869e-b0aaf50f0fb8', 'kelly.kapour@dundermifflin.com',
        '$2y$10$Mck8IEDFnggLroOziZMNvOIUBHRotmfFXyNohTD3S6KusLfimJ0hK', 'Kelly', 'Kapour'),
       ('4a032d84-9f26-451f-b3f4-62d467c45fc7', 'ryan.howard@dundermifflin.com',
        '$2y$10$Ls3ihyncMJK6GrIcVwrha.9/zn3KNA8ifHQDk2/vlTdXusvwOjVw6', 'Ryan', 'Howard'),
       ('28568702-0e7d-4094-97e3-1205caf47f9a', 'creed.bratton@dundermifflin.com',
        '$2y$10$TDBB3vP1zDCb1BTVIEJVxODSQJsQjzGy4nlo2bWrDQyKZWDUl1WXi', 'Creed', 'Bratton');

INSERT INTO privileges (id, name, code, description, index, organization_id, parent_id)
VALUES ('b7d72a65-4fbc-43d3-b81e-724bf4a8145e', 'Manage company', 'MANAGE_COMPANY',
        '', 0, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('98132153-c2b9-493f-bb4e-382fc810dbbb', 'Hire branch manager', 'HIRE_MANAGER',
        '', 0, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'b7d72a65-4fbc-43d3-b81e-724bf4a8145e'),
       ('106022a0-7f6a-423d-a319-9ef1bdbcbd92', 'Fire branch manager', 'FIRE_MANAGER',
        '', 1, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'b7d72a65-4fbc-43d3-b81e-724bf4a8145e'),
       ('21eb8450-0c74-4813-9a6c-8c677b66e3bd', 'Organise party for branch manager', 'ORGANISE_PARTY',
        '', 2, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'b7d72a65-4fbc-43d3-b81e-724bf4a8145e'),
       ('2c7ab7e6-4082-41c7-8cb6-7efef7ea3a4e', 'Solve conflicts between branch managers', 'SOLVE_CONFLICTS',
        '', 3, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'b7d72a65-4fbc-43d3-b81e-724bf4a8145e'),

       ('cdcf7b15-680a-4df8-8d41-ff0eea97ab25', 'Manage branch', 'MANAGE_BRANCH',
        '', 1, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('23f8a940-e755-476e-82f0-2e37f917a6ec', 'Do a business', 'BUSINESS_DOING',
        '', 2, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'cdcf7b15-680a-4df8-8d41-ff0eea97ab25'),
       ('a2cdafaa-9a96-4071-8029-f2f4bc480b52', 'Make a decisions', 'DECISION_MAKING',
        '', 3, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'cdcf7b15-680a-4df8-8d41-ff0eea97ab25'),
       ('67da37e3-39b1-4ebd-b961-1011b345d376', 'Hire an employee', 'HIRE_EMPLOYEE',
        '', 4, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'cdcf7b15-680a-4df8-8d41-ff0eea97ab25'),
       ('c9224c3f-1719-46f1-9093-19b0fed5820d', 'Fire an employee', 'FIRE_EMPLOYEE',
        '', 5, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'cdcf7b15-680a-4df8-8d41-ff0eea97ab25'),
       ('4312a47d-0d8c-4418-945c-9adf7409d574', 'Stress an employee', 'STRESS_EMPLOYEE',
        '', 6, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'cdcf7b15-680a-4df8-8d41-ff0eea97ab25'),
       ('60163d4a-fa87-40a5-97da-ffe3ca5ddb66', 'Make a joke', 'MAKE_JOKE',
        '', 0, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '4312a47d-0d8c-4418-945c-9adf7409d574'),
       ('3ff9e360-10f4-4337-92ea-0dded59620f5', 'Pretend to be someone', 'PRETEND_SOMEONE',
        '', 1, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '4312a47d-0d8c-4418-945c-9adf7409d574'),
       ('1f90ffa9-014c-4292-8b80-c251ccab35e4', 'Make golden ticket idea', 'GOLDEN_TICKET',
        '', 2, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '4312a47d-0d8c-4418-945c-9adf7409d574'),

       ('8459b796-4bce-4fbb-ab39-ba8c21f0d2a4', 'Manage sales', 'MANAGE_SALES',
        '', 2, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('c41ec6f0-273b-4aaf-9ef7-c4c85af5e522', 'Make a sale', 'MAKE_SALE',
        '', 0, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '8459b796-4bce-4fbb-ab39-ba8c21f0d2a4'),
       ('b61e5735-3c22-4c67-af87-66e310cf3d11', 'Find a client', 'FIND_CLIENT',
        '', 1, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '8459b796-4bce-4fbb-ab39-ba8c21f0d2a4'),
       ('e2a5ddc8-8764-43cc-9c6a-32fd8847a86e', 'Prepare a gift', 'PREPARE_GIFT',
        '', 2, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '8459b796-4bce-4fbb-ab39-ba8c21f0d2a4'),

       ('722b0ccb-84c9-4fea-93e2-6d81d792d017', 'Manage reception', 'MANAGE_RECEPTION',
        '', 3, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('ccd6ddc0-1c34-48e6-8f64-e28a16871651', 'Answer the call', 'ANSWER_CALL',
        '', 0, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '722b0ccb-84c9-4fea-93e2-6d81d792d017'),
       ('e862b0d0-c4d0-4684-b63a-0cde34c8d986', 'Make a copy in copier', 'MAKE_COPY',
        '', 1, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '722b0ccb-84c9-4fea-93e2-6d81d792d017'),
       ('9efcd93c-6a39-4252-9373-d8468dabc185', 'Put candies on the table', 'PUT_CANDIES',
        '', 2, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '722b0ccb-84c9-4fea-93e2-6d81d792d017'),
       ('28f9c62a-2564-40d5-ae41-d086aaac20a4', 'Manage manager time', 'MANAGE_TIME',
        '', 3, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '722b0ccb-84c9-4fea-93e2-6d81d792d017'),

       ('f948edd5-5685-4242-b1cd-4366f137ea33', 'Manage numbers', 'MANAGE_NUMBERS',
        '', 4, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('724f824a-73d8-4038-af09-648bc6d5ae0b', 'Settle an accounts', 'SETTLE_ACCOUNTS',
        '', 0, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'f948edd5-5685-4242-b1cd-4366f137ea33'),
       ('5250aef4-446b-4b4d-8b85-0ab4a963dcd8', 'Manage surplus', 'MANAGE_SURPLUS',
        '', 1, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', 'f948edd5-5685-4242-b1cd-4366f137ea33'),
       ('547f28db-2b01-44ca-ba73-2e5736a5b9b5', 'Find a surplus', 'FIND_SURPLUS',
        '', 0, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '5250aef4-446b-4b4d-8b85-0ab4a963dcd8'),
       ('ebcd4dff-622e-48c4-a495-5783746a0d23', 'Explain what is surplus', 'EXPLAIN_SURPLUS',
        '', 1, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '5250aef4-446b-4b4d-8b85-0ab4a963dcd8'),

       ('04d4b2bd-b6f5-4302-93b3-a27f94b20106', 'Manage invoices', 'MANAGE_INVOICES',
        '', 5, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('a71995fb-e334-4851-928b-5a1f6d0b11c8', 'Create invoice', 'CREATE_INVOICE',
        '', 0, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '04d4b2bd-b6f5-4302-93b3-a27f94b20106'),
       ('7e6435c9-5ab0-4b36-8bf8-9ff6be5bf3e7', 'Update invoice', 'UPDATE_INVOICE',
        '', 1, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '04d4b2bd-b6f5-4302-93b3-a27f94b20106'),
       ('58bca7b3-c8c3-433e-9dc5-9758156a6d20', 'Send invoice', 'SEND_INVOICE',
        '', 2, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '04d4b2bd-b6f5-4302-93b3-a27f94b20106'),

       ('75ad8d99-03e7-435a-b02d-76e898833f79', 'Manage party', 'MANAGE_PARTY',
        '', 6, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('3bba991b-0324-44c4-8bf0-602feba5e840', 'Plan a party', 'PLAN_PARTY',
        '', 0, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '75ad8d99-03e7-435a-b02d-76e898833f79'),
       ('ac3d3dd5-013c-4369-8ac3-9fab1385f77b', 'Find a cake', 'FIND_CAKE',
        '', 1, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '75ad8d99-03e7-435a-b02d-76e898833f79'),
       ('b17ba473-e5c9-4f6a-bd8e-83ba538c9dca', 'Make party decorations', 'MAKE_DECORATIONS',
        '', 2, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '75ad8d99-03e7-435a-b02d-76e898833f79'),
       ('8a1b403d-8019-497e-862e-c7f73cdaf3ac', 'Prepare karaoke machine', 'PREPARE_KARAOKE',
        '', 3, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', '75ad8d99-03e7-435a-b02d-76e898833f79'),

       ('fd34db12-af91-4817-9fd4-6cc052d55987', 'Make a prank', 'MAKE_PRANK',
        '', 7, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('e23eabff-074f-4fa9-86c3-ccce5f9878bf', 'Be annoying', 'BE_ANNOYING',
        '', 8, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('9734ca12-e63f-48b5-ad26-816c56608b0d', 'Make a coffee', 'MAKE_COFFEE',
        '', 9, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('e123fe4d-691d-47f2-8517-e1e4e1cc4624', 'Start a fire', 'START_FIRE',
        '', 10, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('798ebf6b-fd0a-480a-9766-e17bc7a0dabf', 'Kill a vampire', 'KILL_VAMPIRE',
        '', 11, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null),
       ('8550a237-ce71-4d76-a3b4-79bd4a955618', 'Be a christmas belsnickel', 'BE_BELSNICKEL',
        '', 12, 'dd6f01cf-9fca-4e7b-9da3-047dd7004494', null);

INSERT INTO user_organizations(user_id, organization_id)
VALUES ('eb613176-2ebf-4756-adef-5694761ecc65', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('c6ac2055-9911-409a-9557-dcf750fdac97', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('919dacea-a0fb-4202-87a3-bb2508f0e332', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('683fd7de-ee87-4ac4-9968-e398674e99b5', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('9a7079b4-138f-4c0a-b73c-2469e33bcc0f', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('d6986ced-3e15-49eb-a958-e26c695afae1', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('f6420b98-63ec-4d5f-a641-11df56a951b6', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('62c66369-7716-4b0d-9fd0-f008d23b9998', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('e24d07c5-4504-4254-8904-9d4e0bd50ec9', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('b372bc94-4f99-42e3-900c-0e3b3045707d', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('b8092073-d220-434b-8956-8cc9760606cd', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('74dbc02d-c420-41b8-bd14-0f5b3ffdb76f', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('9b7a24d8-3e9c-4732-869e-b0aaf50f0fb8', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('4a032d84-9f26-451f-b3f4-62d467c45fc7', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494'),
       ('28568702-0e7d-4094-97e3-1205caf47f9a', 'dd6f01cf-9fca-4e7b-9da3-047dd7004494');

INSERT INTO user_roles (user_id, role_id)
VALUES ('eb613176-2ebf-4756-adef-5694761ecc65', '5dc26691-7582-4603-b7df-c81be19bb47f'),

       ('c6ac2055-9911-409a-9557-dcf750fdac97', '962458e4-8712-4b11-adc7-ac6b13ceefc8'),

       ('919dacea-a0fb-4202-87a3-bb2508f0e332', '5954ae5d-a885-4587-ad95-5854f51e691d'),

       ('919dacea-a0fb-4202-87a3-bb2508f0e332', '3bf63929-3f99-4b66-b7c2-ffe4cb25d14e'),
       ('683fd7de-ee87-4ac4-9968-e398674e99b5', '3bf63929-3f99-4b66-b7c2-ffe4cb25d14e'),
       ('9a7079b4-138f-4c0a-b73c-2469e33bcc0f', '3bf63929-3f99-4b66-b7c2-ffe4cb25d14e'),
       ('d6986ced-3e15-49eb-a958-e26c695afae1', '3bf63929-3f99-4b66-b7c2-ffe4cb25d14e'),
       ('f6420b98-63ec-4d5f-a641-11df56a951b6', '3bf63929-3f99-4b66-b7c2-ffe4cb25d14e'),

       ('62c66369-7716-4b0d-9fd0-f008d23b9998', '249a15e1-c661-4e9d-96d4-e6d15c8194b2'),
       ('e24d07c5-4504-4254-8904-9d4e0bd50ec9', '249a15e1-c661-4e9d-96d4-e6d15c8194b2'),

       ('b372bc94-4f99-42e3-900c-0e3b3045707d', '8fa5692c-bd10-41be-bf7a-ca74bbf4c871'),
       ('b8092073-d220-434b-8956-8cc9760606cd', '8fa5692c-bd10-41be-bf7a-ca74bbf4c871'),
       ('74dbc02d-c420-41b8-bd14-0f5b3ffdb76f', '8fa5692c-bd10-41be-bf7a-ca74bbf4c871'),

       ('62c66369-7716-4b0d-9fd0-f008d23b9998', 'f7915b5f-913b-4c4d-9065-b4891a29be4a'),
       ('b8092073-d220-434b-8956-8cc9760606cd', 'f7915b5f-913b-4c4d-9065-b4891a29be4a'),
       ('f6420b98-63ec-4d5f-a641-11df56a951b6', 'f7915b5f-913b-4c4d-9065-b4891a29be4a'),
       ('9b7a24d8-3e9c-4732-869e-b0aaf50f0fb8', 'f7915b5f-913b-4c4d-9065-b4891a29be4a'),

       ('4a032d84-9f26-451f-b3f4-62d467c45fc7', '8bd91e7b-7855-4e00-a60b-e840ccb58fdc');

INSERT INTO role_privileges (role_id, privilege_id, excluded)
VALUES ('5dc26691-7582-4603-b7df-c81be19bb47f', 'b7d72a65-4fbc-43d3-b81e-724bf4a8145e', false),

       ('962458e4-8712-4b11-adc7-ac6b13ceefc8', 'cdcf7b15-680a-4df8-8d41-ff0eea97ab25', false),

       ('3bf63929-3f99-4b66-b7c2-ffe4cb25d14e', '8459b796-4bce-4fbb-ab39-ba8c21f0d2a4', false),

       ('249a15e1-c661-4e9d-96d4-e6d15c8194b2', '722b0ccb-84c9-4fea-93e2-6d81d792d017', false),

       ('8fa5692c-bd10-41be-bf7a-ca74bbf4c871', 'f948edd5-5685-4242-b1cd-4366f137ea33', false),
       ('8fa5692c-bd10-41be-bf7a-ca74bbf4c871', '04d4b2bd-b6f5-4302-93b3-a27f94b20106', false),

       ('f7915b5f-913b-4c4d-9065-b4891a29be4a', '75ad8d99-03e7-435a-b02d-76e898833f79', false),

       ('8bd91e7b-7855-4e00-a60b-e840ccb58fdc', '9734ca12-e63f-48b5-ad26-816c56608b0d', false),
       ('8bd91e7b-7855-4e00-a60b-e840ccb58fdc', '8459b796-4bce-4fbb-ab39-ba8c21f0d2a4', false),
       ('8bd91e7b-7855-4e00-a60b-e840ccb58fdc', 'e2a5ddc8-8764-43cc-9c6a-32fd8847a86e', true);

INSERT INTO user_privileges (user_id, privilege_id, excluded)
VALUES ('c6ac2055-9911-409a-9557-dcf750fdac97', 'fd34db12-af91-4817-9fd4-6cc052d55987', false),
       ('c6ac2055-9911-409a-9557-dcf750fdac97', '3bba991b-0324-44c4-8bf0-602feba5e840', false),
       ('c6ac2055-9911-409a-9557-dcf750fdac97', '9734ca12-e63f-48b5-ad26-816c56608b0d', false),

       ('683fd7de-ee87-4ac4-9968-e398674e99b5', 'fd34db12-af91-4817-9fd4-6cc052d55987', false),
       ('683fd7de-ee87-4ac4-9968-e398674e99b5', 'e23eabff-074f-4fa9-86c3-ccce5f9878bf', false),

       ('683fd7de-ee87-4ac4-9968-e398674e99b5', 'cdcf7b15-680a-4df8-8d41-ff0eea97ab25', false),
       ('683fd7de-ee87-4ac4-9968-e398674e99b5', '23f8a940-e755-476e-82f0-2e37f917a6ec', true),
       ('683fd7de-ee87-4ac4-9968-e398674e99b5', '4312a47d-0d8c-4418-945c-9adf7409d574', true),

       ('e24d07c5-4504-4254-8904-9d4e0bd50ec9', '9efcd93c-6a39-4252-9373-d8468dabc185', true),

       ('b372bc94-4f99-42e3-900c-0e3b3045707d', '5250aef4-446b-4b4d-8b85-0ab4a963dcd8', true),
       ('b372bc94-4f99-42e3-900c-0e3b3045707d', 'a71995fb-e334-4851-928b-5a1f6d0b11c8', true),
       ('b372bc94-4f99-42e3-900c-0e3b3045707d', '7e6435c9-5ab0-4b36-8bf8-9ff6be5bf3e7', true),
       ('b372bc94-4f99-42e3-900c-0e3b3045707d', '58bca7b3-c8c3-433e-9dc5-9758156a6d20', true),

       ('b8092073-d220-434b-8956-8cc9760606cd', '5250aef4-446b-4b4d-8b85-0ab4a963dcd8', true),

       ('b8092073-d220-434b-8956-8cc9760606cd', '8a1b403d-8019-497e-862e-c7f73cdaf3ac', true),
       ('9b7a24d8-3e9c-4732-869e-b0aaf50f0fb8', '8a1b403d-8019-497e-862e-c7f73cdaf3ac', true),

       ('919dacea-a0fb-4202-87a3-bb2508f0e332', '798ebf6b-fd0a-480a-9766-e17bc7a0dabf', false),
       ('919dacea-a0fb-4202-87a3-bb2508f0e332', '8550a237-ce71-4d76-a3b4-79bd4a955618', false),

       ('4a032d84-9f26-451f-b3f4-62d467c45fc7', 'e123fe4d-691d-47f2-8517-e1e4e1cc4624', false);
