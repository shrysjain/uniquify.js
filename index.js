// Array with unique elements
let unique = [];

function uniquify(arr) {
  // Only arrays can be passed through this function
  if(!Array.isArray(arr)) {
    arr = [];
  }

  // Remove duplicate elements
  let set = new Set(arr);
  let unique = [...set];

  // Return uniquified array
  return unique;
}

// Export
module.exports = uniquify;