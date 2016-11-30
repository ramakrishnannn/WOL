import { WOLPage } from './app.po';

describe('wol App', function() {
  let page: WOLPage;

  beforeEach(() => {
    page = new WOLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
