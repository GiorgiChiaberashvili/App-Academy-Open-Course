CREATE TABLE `kids` (
  `id` INTEGER PRIMARY KEY,
  `name` TEXT,
  `age` INTEGER
);

CREATE TABLE `toys` (
  `id` INTEGER PRIMARY KEY,
  `name` TEXT,
  `kid_id` INTEGER
);

ALTER TABLE `toys` ADD FOREIGN KEY (`kid_id`) REFERENCES `kids` (`id`);
