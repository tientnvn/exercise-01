const assert = require('assert')
const { validate } = require('../lib/validate')
const { checkReservation, countReservation } = require('../lib/hotel-reservation')

let valid1 = {arrivals: [1, 3, 5, 5, 5], departure: [2, 6, 10, 7, 8], k: 2}
let valid2 = {arrivals: [1, 3, 5, 5, 5], departure: [2, 6, 10, 7, 8], k: 4}
let invalid1 = {arrivals: [1, 3, 5, 5], departure: [2, 6, 10, 7, 8], k: 2}
let invalid2 = {arrivals: [1, 3, 5, 5, 5], departure: [2, 6, 10, 7], k: 2}
let invalid3 = {arrivals: [1, 3, 5, 5, 5], departure: [2, 6, 10, 7], k: -1}

describe('CheckReservation', () => {
  describe('#CheckReservation', () => {
    it('Should not have Exception throw with correct data', (done) => {
      try {
        checkReservation(valid1)
        done()
      } catch(ex) {
        done(ex)
      }
    });
  });
  describe('#CheckReservation', () => {
    it('Should have Exception throw with incorrect data', (done) => {
      try {
        checkReservation(invalid1)
        done(new Error("Should Have Exception Throw"))
      } catch(ex) {
        done()
      }
    });
  });
  describe('#CheckReservation', () => {
    it('Should have Exception throw with incorrect data', (done) => {
      try {
        checkReservation(invalid2)
        done(new Error("Should Have Exception Throw"))
      } catch(ex) {
        done()
      }
    });
  });
  describe('#CheckReservation', () => {
    it('Should have Exception throw with incorrect data', (done) => {
      try {
        checkReservation(invalid3)
        done(new Error("Should Have Exception Throw"))
      } catch(ex) {
        done()
      }
    });
  });

  describe('#CheckReservation', () => {
    it('Should return false with missing-row metrix', () => {
      let result = checkReservation(valid2)
      assert.equal(result.valid, true);
    });
  });
});
