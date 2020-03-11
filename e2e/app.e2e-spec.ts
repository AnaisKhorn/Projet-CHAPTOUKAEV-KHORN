import { ProjetCHAPTOUKAEVKHORNPage } from './app.po';

describe('projet-chaptoukaev-khorn App', function() {
  let page: ProjetCHAPTOUKAEVKHORNPage;

  beforeEach(() => {
    page = new ProjetCHAPTOUKAEVKHORNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
