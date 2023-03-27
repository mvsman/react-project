import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/components/select';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  value?: Currency;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

export const CurrencySelect = memo(
  ({ value, readonly, onChange }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const options = useMemo(
      () =>
        Object.entries(Currency).map(([label, value]) => ({
          value,
          label,
        })),
      []
    );

    const handleChange = useCallback(
      (value: string) => {
        if (onChange) {
          onChange(value as Currency);
        }
      },
      [onChange]
    );

    return (
      <Select
        label={t('form.currency')}
        options={options}
        value={value}
        readonly={readonly}
        onChange={handleChange}
      />
    );
  }
);
