----------
-- Step 0 - Create a Query
----------
-- Query: Find a count of `toys` records that have a price greater than
    -- 55 and belong to a cat that has the color "Olive".

    -- Your code here

     SELECT COUNT(*) FROM cat_toys
    JOIN cats ON (cat_toys.cat_id = cats.id)
    JOIN toys ON (cat_toys.toy_id = toys.id)
    WHERE toys.price > 55 AND cats.color = 'Olive';

-- Paste your results below (as a comment):

--215

----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here

    EXPLAIN QUERY PLAN
    SELECT COUNT(*) FROM cat_toys
    JOIN cats ON (cat_toys.cat_id = cats.id)
    JOIN toys ON (cat_toys.toy_id = toys.id)
    WHERE toys.price > 55 AND cats.color = 'Olive';

-- Paste your results below (as a comment):

-- |--SCAN TABLE cat_toys
-- |--SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)
-- `--SEARCH TABLE toys USING INTEGER PRIMARY KEY (rowid=?)

-- What do your results mean?

    -- Was this a SEARCH or SCAN?

    -- SCAN-SEARCH-SEARCH

    -- What does that mean?

    -- cat_toys do not have index attached so it is SCANNED
    -- Both cats and toys are indexed there for they are SEARCHed.


----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

-- Run Time: real 0.001 user 0.000000 sys 0.000184

-- Paste your results below (as a comment):

----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here
     CREATE INDEX idx_cat_toys_toy_price
     ON toys(price)

-- Analyze Query:
    -- Your code here

    EXPLAIN QUERY PLAN
    SELECT COUNT(*) FROM cat_toys
    JOIN cats ON (cat_toys.cat_id = cats.id)
    JOIN toys ON (cat_toys.toy_id = toys.id)
    WHERE toys.price > 55 AND cats.color = 'Olive';

-- Paste your results below (as a comment):


-- Analyze Results:

    -- Is the new index being applied in this query?




----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

-- Paste your results below (as a comment):


-- Analyze Results:
    -- Are you still getting the correct query results?


    -- Did the execution time improve (decrease)?


    -- Do you see any other opportunities for making this query more efficient?



---------------------------------
-- Notes From Further Exploration
---------------------------------
