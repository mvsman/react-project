type Mods = Record<string, string | boolean>

export const classNames = (
  className: string,
  mods: Mods,
  additional: string[]
): string => {
  return [
    className,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key, _]) => key),
  ].join(' ')
}
