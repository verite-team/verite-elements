import { newSpecPage } from '@stencil/core/testing';
import { RocBadge } from '../roc-badge';

describe('roc-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RocBadge],
      html: `<roc-badge></roc-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <roc-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </roc-badge>
    `);
  });
});
