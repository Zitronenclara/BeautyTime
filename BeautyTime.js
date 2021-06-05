/**
 * The calculation factors for the different time units
 * 
 * @since 1.0.0
 * @typedef {Object} fac
 * @property {number} s factor of milliseconds to seconds
 * @property {number} m factor of milliseconds to minutes
 * @property {number} h factor of milliseconds to hours
 * @property {number} d factor of milliseconds to days
 * @property {number} y factor of milliseconds to years
 */
const fac = {
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
    y: 31557600000
}

/**
 * BeautyTime is a universal timespan formatting and time calculating utility
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
     * @param {number} years The amount of years
     */
    constructor(milliseconds = 0, seconds = 0, minutes = 0, hours = 0, days = 0, years = 0){
        /**
         * time is the length of the timespan in milliseconds
         * 
         * @since 1.0.0
         * @type {number}
         * @public
         */
        this.time = calcTotalMilliseconds(milliseconds, seconds, minutes, hours, days, years)
        
        /**
         * originalTime is the amount of time this instance was created with
         * 
         * @since 1.0.0
         * @type {number}
         * @public
         */
        this.originalTime = this.time
    }

    // CREATE FROM STATICS
    /**
     * Creates an instace of BeautyTime from the current date
     *
     * @since 1.0.0
     * @returns {BeautyTime} An instance of BeautyTime
     */
     static fromDateNow(){
        return new this(Date.now())
    }

    /**
     * Creates an instace of BeautyTime from the difference of the current and specified date
     *
     * @since 1.0.0
     * @param {Date} date The date
     * @returns {BeautyTime} An instance of BeautyTime
     */
     static fromDateNowDifference(date){
        if (!(date instanceof Date)){
            throw new Error("The given argument is not a date.")
        }
        let now = + new Date()
        return (+date > +now ? new this(+date - +now) : new this(+now - +date))
    }

    /**
     * Creates an instace of BeautyTime from the given date
     *
     * @since 1.0.0
     * @param {Date} date The date
     * @returns {BeautyTime} An instance of BeautyTime
     */
     static fromDate(date){
         if (!(date instanceof Date)){
             throw new Error("The given argument is not a date.")
         }
         return new this(+ date)
    }

    /**
     * Creates an instace of BeautyTime from the time difference of the given dates
     *
     * @since 1.0.0
     * @param {Date} date1 A date
     * @param {Date} date2 A date
     * @returns {BeautyTime} An instance of BeautyTime
     */
     static fromDates(date1, date2){
        if (!(date1 instanceof Date) || !(date2 instanceof Date)){
            throw new Error("The given arguments have to be dates.")
        }
        return (+date1 > +date2 ? new this(+date1 - +date2) : new this(+date2 - +date1))
    }    

    // ADD SPECIFIC TIME UNITES
    /**
     * Adds a BeautyTime instance to the current instance
     *
     * @since 1.0.0
     * @param {BeautyTime} beautytime The BeautyTime instance that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
     add(beautytime){
        if (!(beautytime instanceof BeautyTime)){
            throw new Error("The given argument is not a instance of BeautyTime.")
        }
        this.time += beautytime.time
        return this
    }

    /**
     * Removes a BeautyTime instance from the current instance
     *
     * @since 1.0.0
     * @param {BeautyTime} beautytime The BeautyTime instance that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
     remove(beautytime){
        if (!(beautytime instanceof BeautyTime)){
            throw new Error("The given argument is not a instance of BeautyTime.")
        }
        this.time -= beautytime.time
        return this
    }

    /**
     * Adds a specified amount of milliseconds to the instance
     *
     * @since 1.0.0
     * @param {number} milliseconds The amount of milliseconds that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
     addMilliseconds(milliseconds){
        this.time += milliseconds
        return this
    }

    /**
     * Adds a specified amount of seconds to the instance
     *
     * @since 1.0.0
     * @param {number} seconds The amount of seconds that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
     addSeconds(seconds){
        this.time += seconds*fac.s
        return this
    }

    /**
     * Adds a specified amount of minutes to the instance
     *
     * @since 1.0.0
     * @param {number} minutes The amount of minutes that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
     addMinutes(minutes){
        this.time += minutes*fac.m
        return this
    }

    /**
     * Adds a specified amount of hours to the instance
     *
     * @since 1.0.0
     * @param {number} hours The amount of hours that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
     addHours(hours){
        this.time += hours*fac.h
        return this
    }

    /**
     * Adds a specified amount of days to the instance
     *
     * @since 1.0.0
     * @param {number} days The amount of days that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
     addDays(days){
        this.time += days*fac.d
        return this
    }

    /**
     * Adds a specified amount of years to the instance
     *
     * @since 1.0.0
     * @param {number} years The amount of years that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
     addDays(years){
        this.time += years*fac.d
        return this
    }

    // REMOVE SPECIFIC TIME UNITS
    /**
     * Removes a specified amount of milliseconds from the instance
     *
     * @since 1.0.0
     * @param {number} milliseconds The amount of milliseconds that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
     removeMilliseconds(milliseconds){
        this.time -= milliseconds
        return this
    }

    /**
     * Removes a specified amount of seconds from the instance
     *
     * @since 1.0.0
     * @param {number} seconds The amount of seconds that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
     removeSeconds(seconds){
        this.time -= seconds*fac.s
        return this
    }

    /**
     * Removes a specified amount of minutes from the instance
     *
     * @since 1.0.0
     * @param {number} minutes The amount of minutes that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
     removeMinutes(minutes){
        this.time -= minutes*fac.m
        return this
    }

    /**
     * Removes a specified amount of hours from the instance
     *
     * @since 1.0.0
     * @param {number} hours The amount of hours that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
     removeHours(hours){
        this.time -= hours*fac.h
        return this
    }

    /**
     * Removes a specified amount of days from the instance
     *
     * @since 1.0.0
     * @param {number} days The amount of days that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
     removeDays(days){
        this.time -= days*fac.d
        return this
    }

    /**
     * Removes a specified amount of years from the instance
     *
     * @since 1.0.0
     * @param {number} years The amount of years that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
     removeDays(years){
        this.time -= years*fac.y
        return this
    }

    // GET TOTAL TIME UNITS
    /**
     * Returns the total time length of this instance in milliseconds
     *
     * @since 1.0.0
     * @returns {number} milliseconds
     */
     getTotalMilliseconds(){
        return this.time
    }

    /**
     * Returns the total time length of this instance in seconds
     *
     * @since 1.0.0
     * @returns {number} seconds
     */
     getTotalSeconds(){
        return this.time/fac.s
    }

    /**
     * Returns the total time length of this instance in minutes
     *
     * @since 1.0.0
     * @returns {number} minutes
     */
     getTotalMinutes(){
        return this.time/fac.m
    }

    /**
     * Returns the total time length of this instance in hours
     *
     * @since 1.0.0
     * @returns {number} hours
     */
     getTotalHours(){
        return this.time/fac.h
    }

    /**
     * Returns the total time length of this instance in days
     *
     * @since 1.0.0
     * @returns {number} days
     */
     getTotalDays(){
        return this.time/fac.d
    }

    /**
     * Returns the total time length of this instance in years
     *
     * @since 1.0.0
     * @returns {number} years
     */
     getTotalYears(){
        return this.time/fac.y
    }
}

/**
 * Calculates the total amount of milliseconds from the given time units
 *
 * @since 1.0.0
 * @param {number} mil timespan milliseconds
 * @param {number} s timespan seconds
 * @param {number} min timespan minutes
 * @param {number} h timespan hours
 * @param {number} d timespan days
 * @param {number} y timespan years
 * @return {number} total amount of milliseconds
 */
function calcTotalMilliseconds (mil = 0, s = 0, min = 0, h = 0, d = 0, y = 0){
    let total = mil+(s*fac.s)+(min*fac.m)+(h*fac.h)+(d*fac.d)+(y*fac.y)
    return (total < 0 ? total *= -1 : total)
}

// checks if launched via nodeJS
if (typeof module !== "undefined" && module.exports) {
    module.exports = BeautyTime
}