type Mods = Record<string, string | boolean | undefined>;

export const cn = (
  className: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string =>
  [
    className,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key, _]) => key),
  ].join(' ');
