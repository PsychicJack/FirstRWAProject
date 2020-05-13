import { createDivWithClass } from "../fequentlyUsedFunctions";
import { tagDraw } from "./indexDraw";

export function makeAPostDraw(host: HTMLDivElement): HTMLDivElement {
    const makeAPost: HTMLDivElement = createDivWithClass(host, "make-a-post");
    toolBarDraw(makeAPost);
    editorDraw(makeAPost);
    tagsDraw(makeAPost);
    return makeAPost;
}

function toolBarDraw(host: HTMLDivElement): HTMLDivElement {
    const toolBar: HTMLDivElement = createDivWithClass(host, "toolbar");
    [
        {
            id: "bold",
            innerHTML: "B",
            class: "tool"
        },
        {
            id: "italic",
            innerHTML: "I",
            class: "tool"
        },
        {
            id: "underline",
            innerHTML: "U",
            class: "tool"
        },
        {
            id: "publish",
            innerHTML: "Publish",
            class: "publish"
        }
    ].forEach((el) => {
        const button = createDivWithClass(toolBar, el.class).appendChild(document.createElement("button"));
        button.id = el.id;
        button.innerHTML = el.innerHTML;
    });
    return toolBar;
}

function editorDraw(host: HTMLDivElement): HTMLDivElement{
    const editor: HTMLDivElement = createDivWithClass(host, "editor");
    return editor;
}

function tagsDraw(host: HTMLDivElement) : HTMLDivElement{
    const tags = createDivWithClass(host, "tags");
   // tagDraw(tags, "Add tags: ").style.backgroundColor = "white";
  //  tagDraw(tags, "+").className += " add-tags";
    return tags;
}