# Hashtable

## Features

Implement a Hashtable with the following methods:

- **_add:_** takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- **_get:_** takes in the key and returns the value from the table.
- **_contains:_** takes in the key and returns a boolean, indicating if the key exists in the table already.
- **_hash:_** takes in an arbitrary key and returns an index in the collection.

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

- Adding a key/value to your hashtable results in the value being in the data structure
- Retrieving based on a key returns the value stored
- Successfully returns null for a key that does not exist in the hashtable
- Successfully handle a collision within the hashtable
- Successfully retrieve a value from a bucket within the hashtable that has a collision
- Successfully hash a key to an in-range value
  Ensure your tests are passing before you submit your solution.

## Approach and Efficiency

Describe approach
Big O for space and time
**Image of Whiteboard**

- [Coded Solution](hashtable.js)
- [JavaScript Table of Contents](../README.md)
