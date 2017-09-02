import { IMPRINTPage } from './app.po';

describe('imprint App', () => {
  let page: IMPRINTPage;

  beforeEach(() => {
    page = new IMPRINTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
