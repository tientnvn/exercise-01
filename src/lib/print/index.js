
const printMetrix = (metrix, n) => {
  for (r = 0; r < n; r++) {
    for (c = 0; c < n; c++) {
      // console.log(metrix[r][c]);
      process.stdout.write(" " + metrix[r][c] + " ")
    }
    console.log()
  }
}

exports.printMetrix = printMetrix
