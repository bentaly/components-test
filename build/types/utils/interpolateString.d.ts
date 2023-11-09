/**
 * this allows you to pass in data to a string. For example you could have
 * const stringToInterpolate = Matt takes $1 apples from Joe and Joe now only has $2
 * const interpolatedString = interpolateString(stringToInterpolate, [2, 5]);
 * Matt takes 2 apples from Joe, and Joe now only has 5
 * @param {string} str - The whole string you are wanting to build.
 * @param {string} options - The options array you want to loop through
 * @param {boolean} localizeString - Should pass number through toLocaleString
 * @return {string} The interpolated string.
 */
export declare function interpolateString(str: string, options: string[] | number[], localizeString?: boolean): string;
