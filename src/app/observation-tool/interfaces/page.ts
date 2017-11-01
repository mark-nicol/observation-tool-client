import {Panel} from "./panel";

export interface Page {
  title: string;
  path: string;
  panels: { [id: string]: Panel };
}
