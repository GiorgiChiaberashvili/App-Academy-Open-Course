----------
-- Step 0 - Create a Query
----------
-- Query: Select all cats that have a toy with an id of 5

    -- Your code here

    SELECT cats.name FROM cat_toys
    JOIN cats ON (cat_toys.toy_id = toys.id)
    JOIN toys ON (cat_toys.cat_id = cats.id)
    WHERE toys.id = 5;

-- Paste your results below (as a comment):

-- Rachelle
-- Rodger
-- Jamal

-- Run Time: real 0.001 user 0.000783 sys 0.000313

----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here

    EXPLAIN QUERY PLAN
    SELECT cats.name FROM cat_toys
    JOIN cats ON (cat_toys.toy_id = toys.id)
    JOIN toys ON (cat_toys.cat_id = cats.id)
    WHERE toys.id = 5;

-- Paste your results below (as a comment):

-- QUERY PLAN
-- |--SEARCH TABLE toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SCAN TABLE cat_toys
-- `--SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)

-- What do your results mean?

    -- Was this a SEARCH or SCAN?

    -- SCAN-SEARCH-SCAN

    -- What does that mean?

    -- Index applied to toys.id cats.id column
    -- There is no index on the cat_toys.id column as it used a SCAN


----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

   -- Run Time: real 0.000 user 0.000124 sys 0.000000

-- Paste your results below (as a comment):




----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here

    CREATE INDEX idx_cat_toys_toy_id
    ON cat_toys(toy_id)

-- Analyze Query:
    -- Your code here

    EXPLAIN QUERY PLAN
    SELECT cats.name FROM cat_toys
    JOIN cats ON (cat_toys.toy_id = toys.id)
    JOIN toys ON (cat_toys.cat_id = cats.id)
    WHERE toys.id = 5;

-- Paste your results below (as a comment):

-- |--SEARCH TABLE toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SCAN TABLE cat_toys
-- `--SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)

-- Analyze Results:

    -- Is the new index being applied in this query?

----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

-- Run Time: real 0.001 user 0.000139 sys 0.000000

-- Paste your results below (as a comment):


-- Analyze Results:
    -- Are you still getting the correct query results?
    -- Yes, I do.

    -- Did the execution time improve (decrease)?
    -- It decreased by a bit

    -- Do you see any other opportunities for making this query more efficient?


---------------------------------
-- Notes From Further Exploration
---------------------------------
