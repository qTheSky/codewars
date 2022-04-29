function past(h, m, s) {
    let milisecInHour = h * 60 * 60 * 1000
    let milisecInMin = m * 60 * 1000
    let milisecInSec = s * 1000
    return milisecInHour + milisecInMin + milisecInSec
}