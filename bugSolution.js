```javascript
//Correct usage of $in operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $match: {
      $or: [
        { field: { $in: [1, 2, 3] } },
        { field: { $in: [4, 5, 6] } }
      ]
    }
  }
]);
```