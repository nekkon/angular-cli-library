import { AngularCliLibraryPage } from './app.po';

describe('angular-cli-library App', () => {
  let page: AngularCliLibraryPage;

  beforeEach(() => {
    page = new AngularCliLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
