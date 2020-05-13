import { createDivWithClass, notSoRandomRandomColorGenerator } from "../fequentlyUsedFunctions";
import { Post } from "../classes/post";
import { Tag } from "../classes/tag";
import { take } from "rxjs/operators";
import { pipe } from "rxjs/index";
import { NUMBER_OF_TAGS_ON_INDEX } from "../services/config";

export function indexDraw(host: HTMLDivElement): void {
    presentationDraw(host);
    searchDraw(host);
    createDivWithClass(host, "post-cards");
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
    Tag.getStreamOfTags()
        .pipe(take(NUMBER_OF_TAGS_ON_INDEX))
        .subscribe((tag: Tag) => {
            tagDraw(tags, tag);
        });
    return tagsContainer;
}

export function tagDraw(host: HTMLDivElement, tag: Tag): HTMLDivElement {
    const tagDiv: HTMLDivElement = createDivWithClass(host, "tag");
    tagDiv.innerHTML = tag.name;
    tagDiv.style.backgroundColor = tag.color;
    return tagDiv;
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
    posts.forEach((post) => {
        post.drawCard(host);
    });
    return host;
}
