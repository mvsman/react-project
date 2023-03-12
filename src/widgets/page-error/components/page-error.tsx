import { useTranslation } from 'react-i18next';

import { Button } from 'shared/components/button';

import styles from './page-error.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.page_error}>
      <h1>{t('pageError')}</h1>
      <Button onClick={handleReload}>{t('pageErrorButton')}</Button>
    </div>
  );
};
