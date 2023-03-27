import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/components/select';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  value?: Country;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

export const CountrySelect = memo(
  ({ value, readonly, onChange }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const options = useMemo(
      () =>
        Object.entries(Country).map(([label, value]) => ({
          label,
          value,
        })),
      []
    );

    const handleChange = useCallback(
      (value: string) => {
        if (onChange) {
          onChange(value as Country);
        }
      },
      [onChange]
    );

    return (
      <Select
        label={t('form.country')}
        options={options}
        value={value}
        readonly={readonly}
        onChange={handleChange}
      />
    );
  }
);
