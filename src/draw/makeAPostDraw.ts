import { createDivWithClass } from "../fequentlyUsedFunctions";
import { Tag } from "../classes/tag";

export function makeAPostDraw(host: HTMLDivElement): HTMLDivElement {
    const makeAPost: HTMLDivElement = createDivWithClass(host, "make-a-post");
    toolBarDraw(makeAPost);
    titleEditorDraw(makeAPost);
    editorDraw(makeAPost);
    tagsDraw(makeAPost);
    return makeAPost;
}

function toolBarDraw(host: HTMLDivElement): HTMLDivElement {
    const toolBar: HTMLDivElement = createDivWithClass(host, "toolbar");
    [
        {
            id: "bold",
            innerHTML: "<b>B</b>",
            class: "tool",
        },
        {
            id: "italic",
            innerHTML: "<i>I</i>",
            class: "tool",
        },
        {
            id: "underline",
            innerHTML: "<u>U</u>",
            class: "tool",
        },
        {
            id: "publish",
            innerHTML: "Publish",
            class: "publish",
        },
    ].forEach((el) => {
        const button = createDivWithClass(toolBar, el.class).appendChild(document.createElement("button"));
        button.id = el.id;
        button.innerHTML = el.innerHTML;
    });
    return toolBar;
}

function titleEditorDraw(host: HTMLDivElement): HTMLDivElement {
    const titleEditor: HTMLDivElement = createDivWithClass(host, "title-editor");
    titleEditor.contentEditable = "true";
    titleEditor.innerHTML = "Input title here";
    return titleEditor;
}

function editorDraw(host: HTMLDivElement): HTMLDivElement {
    const editor: HTMLDivElement = createDivWithClass(host, "editor");
    editor.contentEditable = "true";
    return editor;
}

function tagsDraw(host: HTMLDivElement): HTMLDivElement {
    const tagsDiv: HTMLDivElement = createDivWithClass(host, "tags-div");
    const selectTag: HTMLSelectElement = tagsDiv.appendChild(document.createElement("select"));
    Tag.getStreamOfTags().subscribe((tag: Tag) => {
        const option = selectTag.appendChild(document.createElement("option"));
        option.innerHTML = tag.name;
        option.value = tag.id.toString();
        option.setAttribute("colorholder", tag.color);
        //option.style.backgroundColor = tag.color;
    });
    const button: HTMLButtonElement = tagsDiv.appendChild(document.createElement("button"));
    button.className = "add-button";
    button.innerHTML = "Add";
    button.onclick = () => {
        new Tag(
            +selectTag.value,
            selectTag.selectedOptions[0].innerHTML,
            selectTag.selectedOptions[0].getAttribute("colorholder") as string
        ).draw(tagsDiv);
    };
    return tagsDiv;
}
