// import { JQuery } from 'jquery';
import * as $ from 'jquery';

interface JQueryStatic {
  navigation(options?: any): void;
}

declare global {
  interface JQuery {
    navigation(options?: any): JQuery;
  }
}
