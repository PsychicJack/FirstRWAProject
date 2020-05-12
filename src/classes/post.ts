import { createDivWithClass } from "../fequentlyUsedFunctions";
import { URL_POSTS } from "../services/config";

export class Post {
    id: number
    title: string;
    pages: string[];
    author: string;
    tags: string[];

    constructor(id: number, title: string, pages: string[], author: string, tags: string[] = []) {
        this.id = id;
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

    static getNextCards(setNumber: number, numberOfCards: number = 3): Promise<any> {
        return new Promise((resovle, reject) => {
            return resovle(
                fetch(`${URL_POSTS}`)
                    .then((result) => result.json())
                    .then((data) => {
                       return (JSON.parse(JSON.stringify(data)) as any[]).filter(
                            (el, index) =>
                                index >= (setNumber - 1) * numberOfCards &&
                                index < (setNumber - 1) * numberOfCards + numberOfCards //poor use of filter, if you can find another way change this
                        ).map(el => new Post(el.id, el.title, el.pages, "nesto"));
                    })
            );
        });
    }
}
