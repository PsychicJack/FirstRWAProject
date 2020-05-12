import { createDivWithClass, notSoRandomRandomColorGenerator } from "../fequentlyUsedFunctions";
import { Post } from "../classes/post";

export function indexDraw(host: HTMLDivElement): void {
    presentationDraw(host);
    searchDraw(host);
    const p1: Post = new Post("prvi", ["heladadadasdasdasdasd"], "neko", ["Horror"]);
    const p2: Post = new Post("prvi brerbw easad dasdadasda d asd a as dasd a", ["heladadadasdasdasdasd"], "neko", ["Horror"]);
    const p3: Post = new Post("prvi", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id nibh tortor. Ornare suspendisse sed nisi lacus sed viverra tellus in. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Id venenatis a condimentum vitae. Malesuada pellentesque elit eget gravida cum sociis natoque. Arcu bibendum at varius vel pharetra vel turpis. Felis imperdiet proin fermentum leo vel orci porta non. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Id faucibus nisl tincidunt eget. At erat pellentesque adipiscing commodo elit at imperdiet. Lectus arcu bibendum at varius vel pharetra vel turpis. Mi bibendum neque egestas congue quisque egestas. Erat nam at lectus urna duis convallis convallis. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Sit amet est placerat in egestas erat imperdiet. Semper eget duis at tellus at urna condimentum mattis."], "neko", ["Horror"]);
    const p4: Post = new Post("prvi", ["heladadadasdasdasdasd"], "neko", ["Horror"]);
    const p5: Post = new Post("prvi", ["heladadadasdasdasdasd"], "neko", ["Horror"]);

    postCardsDraw(host, [p1, p2, p3, p4, p5]);
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

function postCardsDraw(host: HTMLDivElement, posts: Post[]): HTMLDivElement {
    const postCards = createDivWithClass(host, "post-cards");
    posts.forEach((post) => {
        post.drawCard(postCards);
    });
    return postCards;
}
