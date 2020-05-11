import { createDivWithClass } from "../fequentlyUsedFunctions";

export class Post {
    title: string;
    pages: string[];
    author: string;
    tags: string[];

    constructor(title: string, pages: string[], author: string, tags: string[] = []) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.tags = tags;
    }

    drawCard(host: HTMLDivElement): HTMLDivElement {
        const postCard: HTMLDivElement = createDivWithClass(host, "post-card");
        createDivWithClass(postCard, "post-card-title").innerHTML = this.title;
        createDivWithClass(postCard, "post-card-page").innerHTML = this.pages[0];
        return postCard;
    }

    draw(host: HTMLDivElement): HTMLDivElement {
        const post: HTMLDivElement = createDivWithClass(host, "post");
        createDivWithClass(post, "post-title").innerHTML = this.title;
        createDivWithClass(post, "post-page").innerHTML = this.pages[0];
        return post;
    }
}
