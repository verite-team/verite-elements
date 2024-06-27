import { newE2EPage } from '@stencil/core/testing';

describe('roc-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<roc-badge></roc-badge>');

    const element = await page.find('roc-badge');
    expect(element).toHaveClass('hydrated');
  });
});
