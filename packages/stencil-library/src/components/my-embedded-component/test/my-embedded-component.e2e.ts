import { newE2EPage } from '@stencil/core/testing';

describe('my-embedded-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-embedded-component></my-embedded-component>');

    const element = await page.find('my-embedded-component');
    expect(element).toHaveClass('hydrated');
  });
});
