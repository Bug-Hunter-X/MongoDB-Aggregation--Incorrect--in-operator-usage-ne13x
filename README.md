# MongoDB Aggregation Pipeline Bug: Incorrect $in Operator Usage
This repository demonstrates a common error when using the `$in` operator within MongoDB aggregation pipelines.  Specifically, it shows how attempting to chain multiple `$match` stages with separate `$in` conditions will not produce the expected results.

The solution uses the `$or` operator to correctly combine multiple `$in` conditions, providing the desired filtering logic.

## Bug
The `bug.js` file illustrates an incorrect way to use multiple `$in` conditions in a single aggregation pipeline.  This approach results in unintended filtering behavior.

## Solution
The `bugSolution.js` file shows how to implement the correct solution using the `$or` operator for combining multiple `$in` queries effectively.
