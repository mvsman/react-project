import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/components/button';
import { cn } from 'shared/lib';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const handleChangeLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={cn('', {}, [className])}
      theme={ButtonTheme.CLEAN}
      onClick={handleChangeLang}
    >
      {t('lang')}
    </Button>
  );
});
