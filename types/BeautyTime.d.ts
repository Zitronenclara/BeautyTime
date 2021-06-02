export = BeautyTime;
/**
 * BeautyTime is a universal timespan format and time calculating utility
 *
 * @class
 * @constructor
 * @public
 */
declare class BeautyTime {
    /**
     * Creates an instace of BeautyTime from the current date
     *
     * @since 1.0.0
     * @returns {BeautyTime} An instance of BeautyTime
     */
    static fromDateNow(): BeautyTime;
    /**
     * Creates an instace of BeautyTime from the given date
     *
     * @since 1.0.0
     * @param {Date} date The date
     * @returns {BeautyTime} An instance of BeautyTime
     */
    static fromDate(date: Date): BeautyTime;
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
    constructor(milliseconds?: number, seconds?: number, minutes?: number, hours?: number, days?: number);
    /**
     * time is the length of the timespan in milliseconds
     *
     * @type {number}
     * @public
     */
    public time: number;
}
declare namespace BeautyTime {
    export { fac };
}
/**
 * The calculation factors for the different time units
 */
type fac = {
    /**
     * factor of milliseconds to seconds
     */
    s: number;
    /**
     * factor of milliseconds to minutes
     */
    m: number;
    /**
     * factor of milliseconds to hours
     */
    h: number;
    /**
     * factor of milliseconds to days
     */
    d: number;
};
