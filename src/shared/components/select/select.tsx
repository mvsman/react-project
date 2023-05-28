import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { cn } from 'shared/lib';
import styles from './select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  label: string;
}

interface SelectProps<T extends string> {
  /** classname for select wrapper */
  className?: string;
  label?: string;
  options: SelectOption<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

const SelectComponent = <T extends string>({
  className,
  label,
  options,
  value,
  readonly,
  onChange,
}: SelectProps<T>) => {
  const items = useMemo(
    () =>
      options.map(({ label, value }) => (
        <option className={styles.option} key={value} value={value}>
          {label}
        </option>
      )),
    [options]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value as T);
      }
    },
    [onChange]
  );

  return (
    <div className={cn(styles.selectWrapper, {}, [className])}>
      {label && <span className={styles.label}>{label}</span>}
      <select
        className={styles.select}
        value={value}
        disabled={readonly}
        onChange={handleChange}
      >
        {items}
      </select>
    </div>
  );
};

export const Select = memo(SelectComponent) as typeof SelectComponent;
