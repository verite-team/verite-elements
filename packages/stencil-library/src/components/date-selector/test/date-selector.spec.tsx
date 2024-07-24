import { newSpecPage } from '@stencil/core/testing';
import { DateSelector } from '../date-selector';

describe('date-selector', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DateSelector],
      html: `<date-selector></date-selector>`,
    });
    expect(page.root).toEqualHtml(`
      <date-selector>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </date-selector>
    `);
  });
});
