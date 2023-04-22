import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/components/page';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <Page>{t('about')}</Page>;
};

export default memo(AboutPage);
