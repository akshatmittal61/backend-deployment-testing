/**
 * Creates an object where every key is a value from the given array and has itself as the value.
 * This is useful for creating enumerations.
 * @example
 * const enumFromString = getEnumeration(["a", "b", "c"]);
 * // enumFromString = { a: "a", b: "b", c: "c" }
 * @returns {Object} An object with the given values as keys and values.
 */
export const getEnumeration = <T extends string>(
	arr: Array<T>
): { [K in T]: K } => {
	const enumeration: { [K in T]: K } = arr.reduce((acc, key) => {
		acc[key] = key;
		return acc;
	}, {} as any);
	return enumeration;
};

/**
 * Omits the given keys from the object.
 * @param {Object} obj The object to omit keys from.
 * @param {string[]} keys The keys to omit.
 * @returns {Object} The new object with the omitted keys.
 */
export const omitKeys = (obj: any, keys: string[]): any => {
	const newObj: any = {};
	Object.keys(obj).forEach((key) => {
		if (!keys.includes(key)) {
			newObj[key] = obj[key];
		}
	});
	return newObj;
};

/**
 * Implements a sleep function that holds the current thread for a given number of seconds.
 * Creates a promise that resolves after the given number of seconds.
 * @param {number} seconds - The number of seconds to wait.
 * @returns {Promise<void>} A promise that resolves after the given number of seconds.
 */
export const sleep = (seconds: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, seconds * 1000));
