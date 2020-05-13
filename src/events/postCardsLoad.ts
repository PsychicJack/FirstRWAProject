import { Subject } from "rxjs";
import { Post } from "../classes/post";
import { postCardsDraw } from "../draw/indexDraw";


let setNumber: number = 1;
const postCardLoader = new Subject();


export function postCardLoadEvent(host: HTMLDivElement) : void{
    (window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            Post.getNextCards(setNumber++).then((data) => postCardLoader.next(data));
        }
    })();
    postCardLoader.subscribe((data: any) => {
        postCardsDraw(host, data as Post[]);
    });
}