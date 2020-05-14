import { Subject } from "rxjs";
import { Post } from "../classes/post";
import { postCardsDraw, tagDraw } from "../draw/indexDraw";
import { URL_PAGE } from "../services/config";

export function postCardEventsInit(searchParams: any, host: HTMLDivElement): void {
    postCardLoadEvent(searchParams, host);
}

export function postCardLoadEvent(searchParams: any, host: HTMLDivElement): void {
    let setNumber: number = 1;
    const postCardLoader = new Subject();
    (window.onscroll = () => {
        
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            //if(searchParams.searchQuery == "")
                Post.getNextCards(setNumber++).then((data) => postCardLoader.next(data));
            //else Post.getNextCardsFromArray(setNumber++, (searchParams.)).then((data) => postCardLoader.next(data));
        }
    })();
    postCardLoader.subscribe((data: any) => {
        postCardsDraw(host, data as Post[]);
    });
}

export function postCardClickEvent(ev: Event): void {
    let target: HTMLDivElement = ev.target as HTMLDivElement;
    let id: number = 0;
    if (target.className == "post-card-title" || target.className == "post-card-page")
        target = target.parentElement as HTMLDivElement;
    if (target.className == "post-card") id = +(target.querySelector("input") as HTMLInputElement).value;
    if (id != 0) window.location.href = `${URL_PAGE}read&id=${id}`;
}
