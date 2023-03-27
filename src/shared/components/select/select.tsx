import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { cn } from 'shared/lib';
import styles from './select.module.scss';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo(
  ({ className, label, options, value, readonly, onChange }: SelectProps) => {
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
          onChange(e.target.value);
        }
      },
      [onChange]
    );

    return (
      <div className={styles.selectWrapper}>
        {label && <span className={styles.label}>{label}</span>}
        <select
          className={cn(styles.select, {}, [className])}
          value={value}
          disabled={readonly}
          onChange={handleChange}
        >
          {items}
        </select>
      </div>
    );
  }
);
