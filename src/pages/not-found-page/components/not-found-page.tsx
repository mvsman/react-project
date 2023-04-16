import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './not-found-page.module.scss';

export const NotFoundPage = memo(() => {
  const { t } = useTranslation('translation');

  return (
    <div className={styles.page}>
      <h1>{t('notFound')}</h1>
    </div>
  );
});
