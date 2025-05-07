export type StringTransformer = (input: string) => string;
export type StringTransformerWithCount = (input: string, count: number) => string;

export interface StringUtils {
    capitalize: StringTransformer;
    trim: StringTransformer;
    repeat: StringTransformerWithCount;
    toSnakeCase: StringTransformer;
    toUpperCase: StringTransformer;
    toLowerCase: StringTransformer;
    isEmpty: (input: string) => boolean;
    reverseString: StringTransformer;
    truncate: StringTransformerWithCount;
    removeSpaces: StringTransformer;
    countWords: (input: string) => number;
    startsWith: (input: string, prefix: string) => boolean;
    endsWith: (input: string, suffix: string) => boolean;
    replaceAll: (input: string, search: string, replacement: string) => string;
}