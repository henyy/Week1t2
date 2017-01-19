import { Week1t2Page } from './app.po';

describe('week1t2 App', function() {
  let page: Week1t2Page;

  beforeEach(() => {
    page = new Week1t2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
