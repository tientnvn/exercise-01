const assert = require('assert')
const { validate } = require('../lib/validate')
const { rotate } = require('../lib/rotate')

let testMetrix = [
  [0, 16, 255, 1],
  [8, 128, 32, 2],
  [0, 0, 0, 3],
  [0, 0, 0, 3]
]

let validateData = [
  [0, 0, 8, 0],
  [0, 0, 128, 16],
  [0, 0, 32, 255],
  [3, 3, 2, 1]
]

let missingRow = [
  [0, 16, 255, 1],
  [8, 128, 32, 2],
  [0, 0, 0, 3]
]

let missingColumn = [
  [0, 16, 1],
  [8, 128, 2],
  [0, 0, 3],
  [0, 0, 3]
]
let missingCellMetrix = [
  [0, 16, 255, 1],
  [8, 128, 32, 2],
  [0, 0, 3],
  [0, 0, 0, 3]
]

let notCorrectData = [
  [0, 16, 255, 1],
  [8, -128, 32, 2],
  [0, 0, 0, 3],
  [0, 0, 0, 3]
]

describe('Validate', () => {
  describe('#CorrectMetrix', () => {
    it('Should return true with correct metrix', () => {
      assert.equal(validate(testMetrix, 4), true);
    });
  });

  describe('#MissingRowMetrix', () => {
    it('Should return false with missing-row metrix', () => {
      assert.equal(validate(missingRow, 4), false);
    });
  });

  describe('#MissingColumnMetrix', () => {
    it('Should return false with missing-column metrix', () => {
      assert.equal(validate(missingColumn, 4), false);
    });
  });

  describe('#MissingCellMetrix', () => {
    it('Should return false with missing-cell metrix', () => {
      assert.equal(validate(missingCellMetrix, 4), false);
    });
  });

  describe('#DataNotCorrect', () => {
    it('Should return false with not correct data metrix', () => {
      assert.equal(validate(notCorrectData, 4), false);
    });
  });
});


describe('Rotate', () => {
  describe('#Rotate', () => {
    it('Should not have Exception throw with correct data metrix', (done) => {
      try {
        rotate(testMetrix, 4)
        done()
      } catch(ex) {
        done(ex)
      }
    });
  });

  describe('#Rotate', () => {
    it('Should have Exception throw with incorrect data metrix', (done) => {
      try {
        rotate(missingRow, 4)
        done(new Error("Should Have Exception Throw"))
      } catch(ex) {
        done()
      }
    });
  });
});
