export { NewsAgency } from "./subject/NewsAgency.ts";
export { MobileApp, Newspaper, RadioStation, TVStation } from "./observers/index.ts";
import { NewsAgency } from "./subject/NewsAgency.ts";
import { MobileApp, Newspaper, RadioStation, TVStation } from "./observers/index.ts";


 console.log("\nOBSERVER PATTERN:");
const agency = new NewsAgency();
const mobile = new MobileApp("user42");
const newspaper = new Newspaper();
const radio = new RadioStation();
const tv = new TVStation();

agency.subscribe(mobile);
agency.subscribe(newspaper);
agency.subscribe(radio);
agency.subscribe(tv);

agency.publishNews("TypeScript 5.0 Released!");
agency.publishNews("Новий патерн Observer у дії!");

