import { ReportesARAPage } from './app.po';

describe('reportes-ara App', function() {
  let page: ReportesARAPage;

  beforeEach(() => {
    page = new ReportesARAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
