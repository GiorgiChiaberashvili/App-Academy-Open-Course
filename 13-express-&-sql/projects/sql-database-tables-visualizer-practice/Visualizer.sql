CREATE TABLE `colors` (
  `id` INTEGER,
  `name` TEXT
);

CREATE TABLE `music` (
  `id` INTEGER,
  `name` TEXT,
  `type_of_work` TEXT,
  `instrumental` BOOLEAN,
  `composition_year` INTEGER,
  `composer` TEXT,
  `sample` BLOB
);

CREATE TABLE `occupations` (
  `id` INTEGER,
  `name` TEXT
);
