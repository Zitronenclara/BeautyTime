export = BeautyTime;
/**
 * BeautyTime is a universal timespan formatting and time calculating utility
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
     * Creates an instace of BeautyTime from the difference of the current and specified date
     *
     * @since 1.0.0
     * @param {Date} date The date
     * @returns {BeautyTime} An instance of BeautyTime
     */
    static fromDateNowDifference(date: Date): BeautyTime;
    /**
     * Creates an instace of BeautyTime from the given date
     *
     * @since 1.0.0
     * @param {Date} date The date
     * @returns {BeautyTime} An instance of BeautyTime
     */
    static fromDate(date: Date): BeautyTime;
    /**
     * Creates an instace of BeautyTime from the time difference of the given dates
     *
     * @since 1.0.0
     * @param {Date} date1 A date
     * @param {Date} date2 A date
     * @returns {BeautyTime} An instance of BeautyTime
     */
    static fromDates(date1: Date, date2: Date): BeautyTime;
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
     * @since 1.0.0
     * @type {number}
     * @public
     */
    public time: number;
    /**
     * originalTime is the amount of time this instance was created with
     *
     * @since 1.0.0
     * @type {number}
     * @public
     */
    public originalTime: number;
    /**
     * Adds a BeautyTime instance to the current instance
     *
     * @since 1.0.0
     * @param {BeautyTime} beautytime The BeautyTime instance that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
    add(beautytime: BeautyTime): BeautyTime;
    /**
     * Removes a BeautyTime instance from the current instance
     *
     * @since 1.0.0
     * @param {BeautyTime} beautytime The BeautyTime instance that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
    remove(beautytime: BeautyTime): BeautyTime;
    /**
     * Adds a specified amount of milliseconds to the instance
     *
     * @since 1.0.0
     * @param {number} milliseconds The amount of milliseconds that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
    addMilliseconds(milliseconds: number): BeautyTime;
    /**
     * Adds a specified amount of seconds to the instance
     *
     * @since 1.0.0
     * @param {number} seconds The amount of seconds that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
    addSeconds(seconds: number): BeautyTime;
    /**
     * Adds a specified amount of minutes to the instance
     *
     * @since 1.0.0
     * @param {number} minutes The amount of minutes that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
    addMinutes(minutes: number): BeautyTime;
    /**
     * Adds a specified amount of hours to the instance
     *
     * @since 1.0.0
     * @param {number} hours The amount of hours that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
    addHours(hours: number): BeautyTime;
    /**
     * Adds a specified amount of days to the instance
     *
     * @since 1.0.0
     * @param {number} days The amount of days that is supposed to be added
     * @returns {BeautyTime} The current BeautyTime instance
     */
    addDays(days: number): BeautyTime;
    /**
     * Removes a specified amount of milliseconds from the instance
     *
     * @since 1.0.0
     * @param {number} milliseconds The amount of milliseconds that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
    removeMilliseconds(milliseconds: number): BeautyTime;
    /**
     * Removes a specified amount of seconds from the instance
     *
     * @since 1.0.0
     * @param {number} seconds The amount of seconds that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
    removeSeconds(seconds: number): BeautyTime;
    /**
     * Removes a specified amount of minutes from the instance
     *
     * @since 1.0.0
     * @param {number} minutes The amount of minutes that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
    removeMinutes(minutes: number): BeautyTime;
    /**
     * Removes a specified amount of hours from the instance
     *
     * @since 1.0.0
     * @param {number} hours The amount of hours that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
    removeHours(hours: number): BeautyTime;
    /**
     * Removes a specified amount of days from the instance
     *
     * @since 1.0.0
     * @param {number} days The amount of days that is supposed to be removed
     * @returns {BeautyTime} The current BeautyTime instance
     */
    removeDays(days: number): BeautyTime;
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
