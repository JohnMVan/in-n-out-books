//Title:  book-interface.ts
//Author: John Vanhessche
//Date 2 February 2023
//Description:  TypeScript file for the book-interface component.

export interface IBook {
    isbn: string;
    title: string;
    description: string;
    numOfPages: number;
    authors: Array<string>;
}