export declare const hoursRange: string[];
export declare const minutesRange: string[];
/**
 * Check whether the passed value is legal
 */
export declare function verifyValue(value: number, range: unknown[]): boolean;
/**
 * Check whether the passed time value is legal
 */
export declare function verifyTime(value: string): boolean;
/**
 * compare time
 * return t1 <= t2
 */
export declare function compareTime(t1: string, t2: string): boolean;
/**
 * Check the validity of the date, return the validity and date array
 */
export declare function verifyDate(dateStr: string): boolean | Date;
export declare type ValidValue = number | string | string[];
export declare function formatValue(value: number | number[] | string): ValidValue;
/**
 * Get an array of year intervals
 */
export declare function getYearRange(start: number, end: number): number[];
/**
 * Get an array of month intervals
 */
export declare function getMonthRange(start: Date, end: Date, year: number): number[];
/**
 * Get date range array
 */
export declare function getDayRange(start: Date, end: Date, year: number, month: number): number[];
