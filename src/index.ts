import { headerDraw } from "./draw/headerDraw";
import { createElementWithClass, createDivWithClass } from "./fequentlyUsedFunctions";

console.log("hello");
const main = createDivWithClass(document.body, "main");
headerDraw(main);