class Book {
    constructor(title, author) {
        this.author = author;
        this.title = title;
    }

    getTitle() {
        return `Title: ${this.title}`;
    }

    getAuthor() {
        return `Author: ${this.author}`;
    }
}