export declare const strictKeys: <T extends {
    [key: string]: unknown;
}>(obj: T) => (keyof T)[];
export declare const strictEntries: <T extends {
    [key: string]: unknown;
}>(obj: T) => [keyof T, T[keyof T]][];
export declare const strictFromEntries: <T extends {
    [key: string]: unknown;
}>(entries: [keyof T, T[keyof T]][]) => T;
