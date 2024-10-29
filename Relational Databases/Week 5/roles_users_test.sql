-- Create roles in test DB
CREATE ROLE
      role_designer,
      role_customer,
      role_admin,
      role_super

-- Grant privilegies on the views to roles

-- Role Designer
GRANT ALL
    ON test.*
    TO role_designer;

-- Roles Customer
GRANT SELECT
    ON test.view_items
    TO role_customer;

GRANT ALL
    ON test.view_users
    TO role_customer;

GRANT SELECT
    ON test.view_orders
    TO role_customer;

GRANT SELECT
    ON test.view_payment
    TO role_customer;

-- Roles Admin
GRANT ALL
    ON test.view_items
    TO role_admin;

GRANT ALL
    ON test.view_users
    TO role_admin;

GRANT ALL
    ON test.view_orders
    TO role_admin;

GRANT ALL
    ON test.view_payment
    TO role_admin;

-- Roles Super
GRANT SELECT, INSERT, UPDATE
    ON test.view_items
    TO role_super;

GRANT SELECT, INSERT, UPDATE
    ON test.view_users
    TO role_super;

GRANT SELECT, INSERT, UPDATE
    ON test.view_orders
    TO role_super;

GRANT SELECT, INSERT, UPDATE
    ON test.view_payment
    TO role_super;


-- Create user for role designer
CREATE USER role_designer_john@localhost IDENTIFIED BY 'John$1782';

-- Create user for role customer
CREATE USER role_customer_homer@localhost IDENTIFIED BY 'Homer$5432';
CREATE USER role_customer_marge@localhost IDENTIFIED BY 'Marge$5432';
CREATE USER role_customer_bart@localhost IDENTIFIED BY 'Bart$5432';

-- Create user for role admin
CREATE USER role_admin_fred@localhost IDENTIFIED BY 'Fred$9075';
CREATE USER role_admin_wilma@localhost IDENTIFIED BY 'Wilma$3452';

-- Create user for role super
CREATE USER role_super_barney@localhost IDENTIFIED BY 'Barney$9035';
CREATE USER role_super_betty@localhost IDENTIFIED BY 'Betty$9475';


-- Assign roles to users
GRANT role_designer
    TO role_designer_john@localhost;

GRANT role_customer
    TO role_customer_homer@localhost;

GRANT role_customer
    TO role_customer_marge@localhost;

GRANT role_customer
    TO role_customer_bart@localhost;

GRANT role_admin TO role_admin_fred@localhost;
GRANT role_admin TO role_admin_wilma@localhost;

GRANT role_super TO role_super_barney@localhost;
GRANT role_super TO role_super_betty@localhost;



