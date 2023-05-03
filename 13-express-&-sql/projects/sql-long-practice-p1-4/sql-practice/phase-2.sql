-- Your code here
DROP TABLE if exists customers;
DROP TABLE if exists coffee_orders;

CREATE TABLE customers (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'name' VARCHAR(40) NOT NULL,
    'phone' NUMERIC(10,0) UNIQUE,
    'email' VARCHAR(255) UNIQUE,
    'points' INTEGER  DEFAULT (5) NOT NULL,
    'created_at' TIMESTAMP  DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE coffee_orders (
    'id' INTEGER PRIMARY KEY,
    'is_redeemed' BOOLEAN DEFAULT 0,
    'ordered_at' TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
