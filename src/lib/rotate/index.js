const { validate } = require('../validate')

const rotate = ( matrix, n) => {
  let newMetrix = [];
  if (validate(matrix, n)) {
    for ( i = 0; i < n; i++) {
      newMetrix.push([])
    }
    for (r = 0; r < n; r++) {
      for (c = 0; c < n; c++) {
        newMetrix[c][n - r - 1] = matrix[r][c]
      }
    }
    return newMetrix
  } else {
    throw new Error("Matrix does not valid")
  }

}

exports.rotate = rotate
