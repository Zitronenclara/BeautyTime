/**
 * The calculation factors for the different time units
 * 
 * @typedef {Object} fac
 * @property {number} s factor of milliseconds to seconds
 * @property {number} m factor of milliseconds to minutes
 * @property {number} h factor of milliseconds to hours
 * @property {number} d factor of milliseconds to days
 */
const fac = {
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000
}

/**
 * BeautyTime is a universal timespan format and time calculating utility
 * 
 * @class
 * @constructor
 * @public
 */
class BeautyTime {
    /**
     * Creates an instace of BeautyTime
     *
     * @since 1.0.0
     * @param {number} milliseconds The amount of milliseconds or the unix timestamp
     * @param {number} seconds The amount of seconds
     * @param {number} minutes The amount of minutes
     * @param {number} hours The amount of hours
     * @param {number} days The amount of days
     */
    constructor(milliseconds = 0, seconds = 0, minutes = 0, hours = 0, days = 0){
        /**
         * time is the length of the timespan in milliseconds
         * 
         * @type {number}
         * @public
         */
        this.time = calcTotalMilliseconds(milliseconds, seconds, minutes, hours, days)
    }
}

/**
 * Calculates the total amount of milliseconds from the given time units
 *
 * @param {number} mil timespan milliseconds
 * @param {number} s timespan seconds
 * @param {number} min timespan minutes
 * @param {number} h timespan hours
 * @param {number} d timespan days
 * @return {number} total amount of milliseconds
 */
function calcTotalMilliseconds (mil = 0, s = 0, min = 0, h = 0, d = 0){
    return mil+(s*fac.s)+(min*fac.m)+(h*fac.h)+(d*fac.d)
}

// checks if launched via nodeJS
if (typeof module !== "undefined" && module.exports) {
    module.exports = BeautyTime
}