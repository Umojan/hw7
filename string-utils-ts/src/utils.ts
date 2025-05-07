import { StringUtils } from "./types";

export const stringUtils: StringUtils = {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    trim: (str) => str.trim(),
    repeat: (str, count) => str.repeat(count),
    toSnakeCase: (str) =>
        str
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "_"),
    toUpperCase: (str) => str.toUpperCase(),
    toLowerCase: (str) => str.toLowerCase(),
    isEmpty: (str) => str.trim().length === 0,
    reverseString: (str) => str.split("").reverse().join(""),
    truncate: (str, length) =>
        str.length <= length ? str : str.slice(0, length) + "...",
    removeSpaces: (str) => str.replace(/\s+/g, ""),
    countWords: (str) =>
        str.trim() === "" ? 0 : str.trim().split(/\s+/).length,
    startsWith: (str, prefix) => str.startsWith(prefix),
    endsWith: (str, suffix) => str.endsWith(suffix),
    replaceAll: (str, search, replacement) =>
        str.split(search).join(replacement),
};