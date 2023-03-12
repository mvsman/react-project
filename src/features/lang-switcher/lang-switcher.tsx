import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/components/button';
import { cn } from 'shared/lib';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const handleChangeLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={cn('', {}, [className])}
      variant="clean"
      onClick={handleChangeLang}
    >
      {t('lang')}
    </Button>
  );
};
