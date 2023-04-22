import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/page';

import styles from './not-found-page.module.scss';

export const NotFoundPage = memo(() => {
  const { t } = useTranslation('translation');

  return (
    <Page className={styles.page}>
      <h1>{t('notFound')}</h1>
    </Page>
  );
});
