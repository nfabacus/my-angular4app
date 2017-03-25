import { MyAngular2appPage } from './app.po';

describe('my-angular2app App', () => {
  let page: MyAngular2appPage;

  beforeEach(() => {
    page = new MyAngular2appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
