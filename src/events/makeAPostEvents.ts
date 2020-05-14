

export function initMakeAPostEvents(): void {
    const editor: HTMLDivElement = document.querySelector(".editor") as HTMLDivElement;
    editor.focus();
    initBoldClick(editor);
    initItalicClick(editor);
    initUnderLineClick(editor);
}

function initBoldClick(editor : HTMLDivElement) {
    (document.getElementById("bold") as HTMLButtonElement).onclick = () => {
        document.execCommand("bold", false, undefined);
        editor.focus();
    };
}

function initItalicClick(editor : HTMLDivElement) {
    (document.getElementById("italic") as HTMLButtonElement).onclick = () => {
        document.execCommand("italic", false, undefined);
        editor.focus();
    };
}

function initUnderLineClick(editor : HTMLDivElement) {
    (document.getElementById("underline") as HTMLButtonElement).onclick = () => {
        document.execCommand("underline", false, undefined);
        editor.focus();
    };
}
