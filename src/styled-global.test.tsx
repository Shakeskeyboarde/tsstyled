import { render } from '@testing-library/react';

import { createStyled, renderStylesToHtmlString } from '.';

const styled = createStyled();

test('global styles order', () => {
  const A = styled.global`
    color: red;
  `;
  const B = styled.global`
    color: blue;
  `;
  const { container } = render(
    <div>
      <B />
      <A />
      <B />
    </div>,
  );

  expect(renderStylesToHtmlString()).toMatchInlineSnapshot(`
    "<style data-tss=\\"global\\">
    :root {
      color: blue;
    }
    </style>
    <style data-tss=\\"global\\">
    :root {
      color: red;
    }
    </style>
    <style data-tss=\\"global\\">
    :root {
      color: blue;
    }
    </style>"
  `);
  expect(container.firstChild).toMatchInlineSnapshot(`<div />`);
});

test('remove global style', () => {
  const A = styled.global`
    color: red;
  `;
  const B = styled.global`
    color: blue;
  `;
  const { container, rerender } = render(
    <div>
      <B />
      <A />
      <B />
    </div>,
  );
  rerender(
    <div>
      <A />
      <B />
    </div>,
  );

  expect(renderStylesToHtmlString()).toMatchInlineSnapshot(`
    "<style data-tss=\\"global\\">
    :root {
      color: red;
    }
    </style>
    <style data-tss=\\"global\\">
    :root {
      color: blue;
    }
    </style>"
  `);
  expect(container.firstChild).toMatchInlineSnapshot(`<div />`);
});

test('global styles always precede component styles', () => {
  const A = styled('div')`
    color: blue;
  `;
  const B = styled.global`
    color: red;
  `;
  const { container } = render(
    <div>
      <A />
      <B />
    </div>,
  );

  expect(renderStylesToHtmlString()).toMatchInlineSnapshot(`
    "<style data-tss=\\"_1ctbf8z\\">
    ._1ctbf8z {
      color: blue;
    }
    </style>
    <style data-tss=\\"global\\">
    :root {
      color: red;
    }
    </style>"
  `);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      <div
        class="tss_<hash> _1ctbf8z"
      />
    </div>
  `);
});

test('parameterized global style', () => {
  const A = styled.global<{ color?: string; backgroundColor?: string }>`
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
  `;
  A.defaultProps = { color: 'red', backgroundColor: 'blue' };
  const { container } = render(<A color={'green'} />);

  expect(renderStylesToHtmlString()).toMatchInlineSnapshot(`
    "<style data-tss=\\"global\\">
    :root {
      color: green;
      background-color: blue;
    }
    </style>"
  `);
  expect(container.firstChild).toMatchInlineSnapshot(`null`);
});