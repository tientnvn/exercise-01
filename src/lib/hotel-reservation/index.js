const validate = (arrivals, departure, k) => {
  if (arrivals.length != departure.length) {
    return false
  }
  return k > 0
}

const checkReservation = ({arrivals, departure, k}) => {
  if (validate(arrivals, departure, k)) {
    const min = Math.min.apply(Math, arrivals)
    const max = Math.max.apply(Math, departure)
    let singleDayBookings = []
    for(let i = min; i < max; i++) {
      singleDayBookings.push(
        {
          arrival: i,
          departure: i + 1,
          reservation: countReservation(arrivals, departure, i)
        }
      )
    }
    let check = singleDayBookings.filter(booking => {
        return booking.reservation > k
    })
    return {data: check, valid: check.length === 0}
  } else {
    throw new Error("Reservation is invalid")
  }
}

const countReservation = (arrivals, departure, day) => {
  let reservation = 0;
  for (let j = 0; j < arrivals.length; j++) {
    if (arrivals[j] <= day && departure[j] >= (day + 1)) {
      reservation++;
    }
  }
  return reservation
}

exports.checkReservation = checkReservation
