import { ContactsAngularPage } from './app.po';

describe('contacts-angular App', function() {
  let page: ContactsAngularPage;

  beforeEach(() => {
    page = new ContactsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
