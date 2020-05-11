import { createDivWithClass, notSoRandomRandomColorGenerator } from "../fequentlyUsedFunctions";

export function indexDraw(host: HTMLDivElement): void {
    presentationDraw(host);
}

function presentationDraw(host: HTMLDivElement): void {
    const presentation: HTMLDivElement = createDivWithClass(
        host,
        "presentation"
    );
    nameDraw(presentation);
    tagsContainerDraw(presentation);
}

function nameDraw(host: HTMLDivElement): void {
    const name: HTMLDivElement = createDivWithClass(host, "name");
    const bigWir: HTMLDivElement = createDivWithClass(name, "big-wir");
    bigWir.innerHTML = "WIR";
    const fullName: HTMLDivElement = createDivWithClass(name, "full-name");
    fullName.innerHTML = "write imagine read";
}

function tagsContainerDraw(host: HTMLDivElement): void {
    const tagsContainer: HTMLDivElement = createDivWithClass(
        host,
        "tags-container"
    );
    const tags : HTMLDivElement = createDivWithClass(tagsContainer, "tags");
    [
        "Sci-Fi",
        "Romance",
        "Fantasy",
        "Horror",
        "Adventure",
        "Fan Fiction",
    ].forEach((el) => {
        const tag = tagDraw(tags, el);
        tag.style.backgroundColor = notSoRandomRandomColorGenerator();
            
    });
}

export function tagDraw(host: HTMLDivElement, tagText: string): HTMLDivElement {
    const tag = createDivWithClass(host, "tag");
    tag.innerHTML = tagText;
    return tag;
}
