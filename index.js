var boundingBox = require('vertices-bounding-box');

function rescaleVertices(positions, targetBounds, sourceBounds) {

  sourceBounds = sourceBounds || boundingBox(positions);

  var dimensions = positions[0].length;
  var sourceSpans = new Array(dimensions);
  var targetSpans = new Array(dimensions);

  for(var i=0; i<dimensions; i++) {
    sourceSpans[i] = sourceBounds[1][i] - sourceBounds[0][i];
    targetSpans[i] = targetBounds[1][i] - targetBounds[0][i];
  }

  return positions.map(function(position) {
    var rescaled = new Array(dimensions);
    for(var i=0; i<dimensions; i++) {
      rescaled[i] = (position[i] - sourceBounds[0][i]) / sourceSpans[i] * targetSpans[i] + targetBounds[0][i];
    }
    return rescaled;
  });
}

module.exports = rescaleVertices;