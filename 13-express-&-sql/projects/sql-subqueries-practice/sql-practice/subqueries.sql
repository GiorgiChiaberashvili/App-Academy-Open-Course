SELECT cats.name , toys.name FROM cats
JOIN toys ON toys.cat.id = cats.id
WHERE cats.name = 'Garfield';

SELECT name
FROM toys
WHERE cat_id IN (
    SELECT id
    FROM cats
    WHERE name = 'Garfield'
);


INSERT INTO toys(name, cat_id)
VALUES (
    'Pepperoni',
    (SELECT id
    FROM cats
    WHERE name = 'Garfield')
);

INSERT INTO toys(name, cat_id)
SELECT 'Cat Bed', id FROM cats
WHERE birth_year > 2013;

SELECT * FROM cats
WHERE name = 'Cat Bed';

INSERT INTO cats_backup
SELECT * FROM cats;

INSERT INTO toys_backup
SELECT * FROM toys;
