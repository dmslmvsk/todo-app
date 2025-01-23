export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export type SortDirection = "ASC" | "DESC";

export interface Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    last: boolean;
}
