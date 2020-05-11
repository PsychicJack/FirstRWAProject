import { headerDraw } from "./draw/headerDraw";
import { createElementWithClass, createDivWithClass } from "./fequentlyUsedFunctions";
import { indexDraw } from "./draw/indexDraw";

console.log("hello");
const main = createDivWithClass(document.body, "main");
headerDraw(main);
indexDraw(main);