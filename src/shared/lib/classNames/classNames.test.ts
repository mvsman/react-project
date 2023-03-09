import { cn } from './classNames';

describe('classNames', () => {
  test('default class', () => {
    expect(cn('class')).toBe('class');
  });

  test('class with mods', () => {
    expect(cn('class', { show: true, collapse: false })).toBe('class show');
  });

  test('class with additional options', () => {
    expect(cn('class', {}, ['class2', 'class3'])).toBe('class class2 class3');
  });

  test('class with all options', () => {
    expect(
      cn('class', { show: undefined, collapse: true }, ['class2', 'class3'])
    ).toBe('class class2 class3 collapse');
  });
});
