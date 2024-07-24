import { newE2EPage } from '@stencil/core/testing';

describe('my-parent-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-parent-component></my-parent-component>');

    const element = await page.find('my-parent-component');
    expect(element).toHaveClass('hydrated');
  });
});
