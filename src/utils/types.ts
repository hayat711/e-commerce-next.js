export type Nil<T> = T | null | undefined

export type HTTPMethod =
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "OPTIONS"
    | "TRACE"
    | "PATCH";


export interface IProduct {
    name: string;
    link: string;
    price: string | number;
    color?: string;
    category?: string;
    description?: string;
    
}