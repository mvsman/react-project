/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from 'entities/article';

import styles from './article-details-page.module.scss';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t('notFound')}</div>;
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
