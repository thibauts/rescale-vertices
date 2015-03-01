rescale-vertices
================
### Rescales vertices to the dimensions of a target bounding box

Accepts bounding boxes and positions of arbitrary dimensions.

Install
-------

```bash
$ npm install rescale-vertices
```

Usage
-----

```javascript
var rescaleVertices = require('rescale-vertices');

var positions = [ 
  [-1,  0,  0],
  [ 1,  0, -1],
  [ 0, -1,  0],
  [ 0,  1,  1] 
];

var targetBounds = [
  [-1, -2, -3],
  [ 1,  2,  3]
];

// Takes the source bounding-box as an optional 3rd parameter. 
// If not provided the bounding-box is computed internally.
var positions = rescaleVertices(positions, targetBounds /*, sourceBounds */);

console.log(positions);
/*
[ 
  [ -1,  0,  0 ], 
  [  1,  0, -3 ], 
  [  0, -2,  0 ], 
  [  0,  2,  3 ] 
]
*/
```
