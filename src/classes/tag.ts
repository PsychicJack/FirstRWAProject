import { URL_TAGS } from "../services/config";
import { notSoRandomRandomColorGenerator } from "../fequentlyUsedFunctions";
import { Observable, Observer, observable } from "rxjs";

export class Tag {
    id: number;
    name: string;
    color: string;

    constructor(id: number, name: string, color: string) {
        this.id = id;
        this.name = name;
        this.color = color;
    }

    static getTagById(id: number): Promise<Tag> {
        return new Promise((resovle, reject) => {
            return resovle(
                fetch(`${URL_TAGS}/${id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        return new Tag(data.id, data.name, notSoRandomRandomColorGenerator());
                    })
                /*.catch((x) => {
                        console.log("greska");
                        return new Tag(1, "s", "");
                    })*/
            );
        });
    }

    private static getAllTagsFromDataBase(): Promise<any> {
        return new Promise((resolve, reject) => {
            return resolve(
                fetch(`${URL_TAGS}`)
                    .then((response) => response.json())
                    .then((data) => {
                        return JSON.parse(JSON.stringify(data)).map(
                            (tag: any) => new Tag(tag.id, tag.name, notSoRandomRandomColorGenerator())
                        );
                    })
            );
        });
    }

    static getStreamOfTags(): any {
        return Observable.create((observer: any) => {
            Tag.getAllTagsFromDataBase().then((tags) => {
                tags.forEach((tag: Tag) => {
                    observer.next(tag);
                });
            });
        });
    }
}
