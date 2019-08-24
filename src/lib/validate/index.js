const validate = (matrix, n) => {
  if (matrix.length != n) {
    return false
  }
  for (i = 0; i < matrix.length; i++) {
    if (matrix[i].length != n) {
      return false
    }
    for ( j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0 || matrix[i][j] > 255) {
        return false
      }
    }
  }
  return true
}

exports.validate = validate
