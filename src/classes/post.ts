import { createDivWithClass } from "../fequentlyUsedFunctions";
import { URL_POSTS, NUMBER_OF_CARDS_PER_LOAD } from "../services/config";
import { postCardClickEvent } from "../events/postCardsEvents";
import { Observable } from "rxjs";

export class Post {
    id: number;
    title: string;
    text: string;
    author: string;
    tags: string[];

    constructor(id: number, title: string, text: string, author: string, tags: string[] = []) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.author = author;
        this.tags = tags;
    }

    drawCard(host: HTMLDivElement): HTMLDivElement {
        const postCard: HTMLDivElement = createDivWithClass(host, "post-card");
        createDivWithClass(postCard, "post-card-title").innerHTML = this.title;
        createDivWithClass(postCard, "post-card-page").innerHTML = this.text;
        const input: HTMLInputElement = postCard.appendChild(document.createElement("input"));
        input.type = "hidden";
        input.value = `${this.id}`;
        host.addEventListener("click", postCardClickEvent);
        return postCard;
    }

    draw(host: HTMLDivElement): HTMLDivElement {
        const post: HTMLDivElement = createDivWithClass(host, "post");
        createDivWithClass(post, "post-title").innerHTML = this.title;
        createDivWithClass(post, "post-page").innerHTML = this.text;
        return post;
    }

    static getNextCards(setNumber: number, numberOfCards: number = NUMBER_OF_CARDS_PER_LOAD): Promise<any> {
        return new Promise((resovle, reject) => {
            return resovle(
                fetch(URL_POSTS)
                    .then((result) => result.json())
                    .then((data) => {
                        return (
                            (JSON.parse(JSON.stringify(data)) as any[])
                                /*.filter(
                                (el, index) =>
                                    index >= (setNumber - 1) * numberOfCards &&
                                    index < (setNumber - 1) * numberOfCards + numberOfCards //poor use of filter, if you can find another way change this
                            )*/
                                .slice((setNumber - 1) * numberOfCards, (setNumber - 1) * numberOfCards + numberOfCards)
                                .map((el) => new Post(el.id, el.title, el.text, "nesto"))
                        );
                    })
            );
        });
    }

    static getPostById(id: number): Promise<any> {
        return new Promise((res, rej) => {
            return res(
                fetch(`${URL_POSTS}/${id}`)
                    .then((result) => result.json())
                    .then((data) => {
                        return data;
                    })
            );
        });
    }

    private static getPostsByCustomUrl(url: string): Promise<Post[]> {
        return new Promise((res, rej) => {
            return res(
                fetch(url)
                    .then((result) => result.json())
                    .then((data) => {
                        return JSON.parse(JSON.stringify(data)).map((el: any) => {
                            return new Post(el.id, el.title, el.text, "nesto");
                        });
                    })
            );
        });
    }

    private static getAllPosts(): Promise<Post[]> {
        return Post.getPostsByCustomUrl(URL_POSTS);
    }

    static getPostsByBeginingOfTitle(beginingOfTitle: string): any {
        return Observable.create((observer: any) => {
            Post.getAllPosts().then((data) => {
                JSON.parse(JSON.stringify(data))
                    .filter((el: any) => el.title.toLowerCase().startsWith(beginingOfTitle))
                    .forEach((element: any) => {
                        observer.next(element);
                    });
            });
        });
    }

    static getPostsByTagId(tagId: number): Promise<Post[]> {
        return Post.getPostsByCustomUrl(`${URL_POSTS}?tags_like=${tagId}`);
    }

    static getPostsByAuthorId(authorId: number): Promise<Post[]> {
        return Post.getPostsByCustomUrl(`${URL_POSTS}?authorId=${authorId}`);
    }

    static getNextCardsFromArray(setNumber: number, array: Post[], numberOfCards: number = NUMBER_OF_CARDS_PER_LOAD) {
        return array
            .slice((setNumber - 1) * numberOfCards, (setNumber - 1) * numberOfCards + numberOfCards)
            .map((el) => new Post(el.id, el.title, el.text, "nesto"));
    }
}
