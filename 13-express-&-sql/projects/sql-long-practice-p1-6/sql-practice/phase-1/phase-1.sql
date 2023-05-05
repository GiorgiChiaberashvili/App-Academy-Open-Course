CREATE TABLE `cats` (
  `id` INTEGER PRIMARY KEY,
  `name` TEXT,
  `birth_year` INTEGER
);

CREATE TABLE `owners` (
  `id` INTEGER PRIMARY KEY,
  `first_name` TEXT,
  `last_name` TEXT
);

CREATE TABLE `cat_owners` (
  `cats_id` INTEGER,
  `owners_id` INTEGER
);

CREATE TABLE `toys` (
  `name` text,
  `cats__id` INTEGER
);

ALTER TABLE `cat_owners` ADD FOREIGN KEY (`cats_id`) REFERENCES `cats` (`id`);

ALTER TABLE `cat_owners` ADD FOREIGN KEY (`owners_id`) REFERENCES `owners` (`id`);

ALTER TABLE `toys` ADD FOREIGN KEY (`cats__id`) REFERENCES `cats` (`id`);
