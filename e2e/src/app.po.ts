import { browser, by, element } from 'protractor';

export class BookRatingReduxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('br-root h1')).getText();
  }
}