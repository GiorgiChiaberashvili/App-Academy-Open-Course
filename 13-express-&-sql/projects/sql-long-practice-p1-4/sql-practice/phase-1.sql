CREATE TABLE Customers (
  `id` INTEGER PRIMARY KEY,
  `name` VARCHAR(40),
  `contact_1` TEXT,
  `contact_2` TEXT
);

CREATE TABLE Purchases (
  `id` INTEGER PRIMARY KEY,
  `customer_id` INTEGER,
  `purchase_date` TEXT,
  `point_earned` INTEGER
);

CREATE TABLE Redemptions (
  `id` INTEGER PRIMARY KEY,
  `customer_id` INTEGER,
  `redemption_date` TEXT,
  `points_used` INTEGER
);

ALTER TABLE `Purchases` ADD FOREIGN KEY (`customer_id`) REFERENCES `Customers` (`id`);

ALTER TABLE `Redemptions` ADD FOREIGN KEY (`customer_id`) REFERENCES `Customers` (`id`);
