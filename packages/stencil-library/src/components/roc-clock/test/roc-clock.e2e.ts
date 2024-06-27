import { newE2EPage } from '@stencil/core/testing';

describe('roc-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<roc-clock></roc-clock>');

    const element = await page.find('roc-clock');
    expect(element).toHaveClass('hydrated');
  });
});
