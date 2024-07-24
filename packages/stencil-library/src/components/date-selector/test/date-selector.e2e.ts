import { newE2EPage } from '@stencil/core/testing';

describe('date-selector', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<date-selector></date-selector>');

    const element = await page.find('date-selector');
    expect(element).toHaveClass('hydrated');
  });
});
