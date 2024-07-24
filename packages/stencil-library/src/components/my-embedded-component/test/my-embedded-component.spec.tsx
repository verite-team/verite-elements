import { newSpecPage } from '@stencil/core/testing';
import { MyEmbeddedComponent } from '../my-embedded-component';

describe('my-embedded-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyEmbeddedComponent],
      html: `<my-embedded-component></my-embedded-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-embedded-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-embedded-component>
    `);
  });
});
