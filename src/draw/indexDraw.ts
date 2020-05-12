import { createDivWithClass, notSoRandomRandomColorGenerator } from "../fequentlyUsedFunctions";
import { Post } from "../classes/post";

export function indexDraw(host: HTMLDivElement): void {
    presentationDraw(host);
    searchDraw(host);

    Post.getNextCards(1).then((data) => {
        postCardsDraw(host, data as Post[]);
    });
}

function presentationDraw(host: HTMLDivElement): HTMLDivElement {
    const presentation: HTMLDivElement = createDivWithClass(host, "presentation");
    nameDraw(presentation);
    tagsContainerDraw(presentation);
    return presentation;
}

function nameDraw(host: HTMLDivElement): HTMLDivElement {
    const name: HTMLDivElement = createDivWithClass(host, "name");
    const bigWir: HTMLDivElement = createDivWithClass(name, "big-wir");
    bigWir.innerHTML = "WIR";
    const fullName: HTMLDivElement = createDivWithClass(name, "full-name");
    fullName.innerHTML = "write imagine read";
    return name;
}

function tagsContainerDraw(host: HTMLDivElement): HTMLDivElement {
    const tagsContainer: HTMLDivElement = createDivWithClass(host, "tags-container");
    const tags: HTMLDivElement = createDivWithClass(tagsContainer, "tags");
    ["Sci-Fi", "Romance", "Fantasy", "Horror", "Adventure", "Fan Fiction"].forEach((el) => {
        const tag: HTMLDivElement = tagDraw(tags, el);
    });
    return tagsContainer;
}

export function tagDraw(host: HTMLDivElement, tagText: string): HTMLDivElement {
    const tag: HTMLDivElement = createDivWithClass(host, "tag");
    tag.innerHTML = tagText;
    tag.style.backgroundColor = notSoRandomRandomColorGenerator();
    return tag;
}

function searchDraw(host: HTMLDivElement): HTMLDivElement {
    const search: HTMLDivElement = createDivWithClass(host, "search");
    createDivWithClass(search, "search-instructions").innerHTML = "Search by tags, titles and users";
    const searchBar: HTMLInputElement = createDivWithClass(search, "search-bar-div").appendChild(
        document.createElement("input")
    );
    searchBar.id = "search-bar";
    return search;
}

export function postCardsDraw(host: HTMLDivElement, posts: Post[]): HTMLDivElement {
    const postCards = createDivWithClass(host, "post-cards");
    posts.forEach((post) => {
        post.drawCard(postCards);
    });
    return postCards;
}
