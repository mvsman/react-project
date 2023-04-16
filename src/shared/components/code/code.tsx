import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../button';
import styles from './code.module.scss';

interface CodeProps {
  text: string;
}

export const Code = ({ text }: CodeProps) => {
  const { t } = useTranslation('article-details');

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={styles.code}>
      <Button className={styles.copyBtn} onClick={onCopy}>
        {t('copy')}
      </Button>
      <code>{text}</code>
    </pre>
  );
};
