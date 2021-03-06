const getHtmlAttributes = <TProps extends {}>(props: TProps): Partial<TProps> => {
  const keys = Object.keys(props) as (string & keyof TProps)[];
  const filtered: Partial<TProps> = {};

  for (let index = keys.length - 1; index >= 0; --index) {
    const key = keys[index];

    if (!key.startsWith('$')) {
      filtered[key] = props[key];
    }
  }

  return filtered;
};

export { getHtmlAttributes };
