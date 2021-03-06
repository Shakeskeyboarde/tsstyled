import { render } from '@testing-library/react';

import { createStyled, renderStylesToString } from '.';

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

  expect(renderStylesToString()).toMatchInlineSnapshot(`
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

  expect(renderStylesToString()).toMatchInlineSnapshot(`
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

test('global styles and component styles are rendered in order', () => {
  const A = styled('div')`
    color: blue;
  `;
  const B = styled.global`
    color: red;
  `;
  const { container } = render(
    <div>
      <B />
      <A />
      <B />
    </div>,
  );

  expect(renderStylesToString()).toMatchInlineSnapshot(`
    "<style data-tss=\\"global\\">
    :root {
      color: red;
    }
    </style>
    <style data-tss=\\"_136lazs\\">
    ._136lazs {
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
        class="tss_<hash> _136lazs"
      />
    </div>
  `);
});

test('parameterized global style', () => {
  const A = styled.global<{ readonly backgroundColor?: string; readonly color?: string }>`
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
  `;
  A.defaultProps = { backgroundColor: 'blue', color: 'red' };
  const { container } = render(<A color={'green'} />);

  expect(renderStylesToString()).toMatchInlineSnapshot(`
    "<style data-tss=\\"global\\">
    :root {
      color: green;
      background-color: blue;
    }
    </style>"
  `);
  expect(container.firstChild).toMatchInlineSnapshot(`null`);
});
