import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import { cn } from 'shared/lib';

import styles from './input.module.scss';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({
    className,
    type = 'text',
    label,
    value,
    placeholder,
    name,
    readonly,
    onChange,
    ...rest
  }: InputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={styles.wrapper}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          className={cn(styles.input, { [styles.readonly]: readonly }, [
            className,
          ])}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          readOnly={readonly}
          onChange={handleChange}
          {...rest}
        />
      </div>
    );
  }
);
