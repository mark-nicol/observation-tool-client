import { OtPrototypePage } from './app.po';

describe('ot-prototype App', () => {
  let page: OtPrototypePage;

  beforeEach(() => {
    page = new OtPrototypePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
