import { AngularCliLibraryPage } from './app.po';

describe('App2 ', () => {
  let page: AngularCliLibraryPage;

  beforeEach(() => {
    page = new AngularCliLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to an extended version of a new app generated with ng new! This example uses a shared component/module between multiple apps!!');
  });
});
