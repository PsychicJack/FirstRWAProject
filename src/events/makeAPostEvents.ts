

export function initMakeAPostEvents(): void {
    const editor: HTMLDivElement = document.querySelector(".editor") as HTMLDivElement;
    editor.focus();
    initBoldClick(editor);
    initItalicClick(editor);
    initUnderLineClick(editor);
}

function format(command: string, value: string | undefined): void {
    document.execCommand(command, false, value);
}

function initBoldClick(editor : HTMLDivElement) {
    (document.getElementById("bold") as HTMLButtonElement).onclick = () => {
        format("bold", undefined);
        editor.focus();
    };
}

function initItalicClick(editor : HTMLDivElement) {
    (document.getElementById("italic") as HTMLButtonElement).onclick = () => {
        format("italic", undefined);
        editor.focus();
    };
}

function initUnderLineClick(editor : HTMLDivElement) {
    (document.getElementById("underline") as HTMLButtonElement).onclick = () => {
        format("underline", undefined);
        editor.focus();
    };
}
