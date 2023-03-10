import { useTranslation } from 'react-i18next';

import { cn } from 'shared/lib';

import styles from './not-found-page.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation('translation');

  return (
    <div className={cn(styles.page)}>
      <h1>{t('notFound')}</h1>
    </div>
  );
};
