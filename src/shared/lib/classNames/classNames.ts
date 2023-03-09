type Mods = Record<string, string | boolean>;

export const cn = (
  className: string,
  mods: Mods = {},
  additional: string[] = []
): string =>
  [
    className,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key, _]) => key),
  ].join(' ');
