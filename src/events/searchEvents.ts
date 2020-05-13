import { fromEvent, Observable, merge, zip, Subject, Subscription } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { Tag } from "../classes/tag";
import { User } from "../classes/user";
import { Post } from "../classes/post";
import { drawAutocompleteItem } from "../draw/indexDraw";

export function initSearchEvents() {
    const searchBar: HTMLInputElement = document.getElementById("search-bar") as HTMLInputElement;
    const autocomplete: HTMLDivElement = document.querySelector(".autocomplete") as HTMLDivElement;
    const sub = new Subject();
    let subscription: Subscription = Observable.create().subscribe(); // to stop the error: subscription is undefined
    autocompleteEvent().subscribe(sub); // to turn into hot observable
    searchBar.oninput = () => {
        (document.getElementById("search-by") as HTMLSelectElement).dispatchEvent(new Event("change"));
        autocomplete.innerHTML = "";
        subscription.unsubscribe();
        subscription = sub.subscribe((item) => drawAutocompleteItem(autocomplete, item));
        console.log(sub.observers.length);
    };
}

export function autocompleteEvent() {
    const searchBar$: Observable<Event> = fromEvent(document.getElementById("search-bar") as HTMLInputElement, "input");
    const filter$: Observable<Event> = fromEvent(document.getElementById("search-by") as HTMLSelectElement, "change");
    return zip(searchBar$, filter$).pipe(
        map(([searchBar, filter]) => {
            return {
                searchQuery: (searchBar.target as HTMLInputElement).value,
                filter: (filter.target as HTMLSelectElement).value,
            };
        }),
        switchMap((ev) => {
            if (ev.searchQuery != "") {
                if (ev.filter == "Tag") users(ev.searchQuery);
                else if (ev.filter == "Author") users(ev.searchQuery);
                else if (ev.filter == "Title") return posts(ev.searchQuery);
                else return merge(posts(ev.searchQuery), tags(ev.searchQuery), users(ev.searchQuery));
            } else return Observable.create(); //to stop the error: Observable expected
        })
    );
}

function posts(searchQuery: string): any {
    return Post.getPostsByBeginingOfTitle(searchQuery).pipe(
        map((post) => {
            return { type: "post", id: (post as Post).id, text: (post as Post).title };
        })
    );
}

function tags(searchQuery: string): any {
    return Tag.getStreamOfTagsThatStartWith(searchQuery).pipe(
        map((tag) => {
            return { type: "tag", id: (tag as Tag).id, text: (tag as Tag).name };
        })
    );
}

function users(searchQuery: string): any {
    return User.getStreamOfUsersByBeginigOfPenName(searchQuery).pipe(
        map((user) => {
            return { type: "user", id: (user as User).id, text: (user as User).penName };
        })
    );
}
