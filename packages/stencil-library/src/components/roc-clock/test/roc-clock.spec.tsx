import { newSpecPage } from '@stencil/core/testing';
import { RocClock } from '../roc-clock';

describe('roc-clock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RocClock],
      html: `<roc-clock></roc-clock>`,
    });
    expect(page.root).toEqualHtml(`
      <roc-clock>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </roc-clock>
    `);
  });
});
