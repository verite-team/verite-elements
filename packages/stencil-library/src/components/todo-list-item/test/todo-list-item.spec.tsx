import { newSpecPage } from '@stencil/core/testing';
import { TodoListItem } from '../todo-list-item';

describe('todo-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TodoListItem],
      html: `<todo-list-item></todo-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <todo-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </todo-list-item>
    `);
  });
});
