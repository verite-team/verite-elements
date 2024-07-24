import { newSpecPage } from '@stencil/core/testing';
import { MyParentComponent } from '../my-parent-component';

describe('my-parent-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyParentComponent],
      html: `<my-parent-component></my-parent-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-parent-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-parent-component>
    `);
  });
});
