import { newE2EPage } from '@stencil/core/testing';

describe('todo-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-list-item></todo-list-item>');

    const element = await page.find('todo-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
