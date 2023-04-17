import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Skeleton } from 'shared/components/skeleton';
import { Text } from 'shared/components/text';
import { Avatar } from 'shared/components/avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';

import { articleDetailsReducer } from '../../model/slice/article-details-slice';
import { fetchArticleById } from '../../model/services/fetch-article-by-id/fetch-article-by-id';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors';
import { ArticleBlock } from '../../model/types/article';
import { ArticleTextBlock } from '../article-text-block/article-text-block';
import { ArticleCodeBlock } from '../article-code-block/article-code-block';
import { ArticleImageBlock } from '../article-image-block/article-image-block';

import styles from './article-details.module.scss';

interface ArticleDetailsProps {
  id: string;
}

const usedReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case 'TEXT':
      return <ArticleTextBlock key={block.id} block={block} />;
    case 'CODE':
      return <ArticleCodeBlock key={block.id} block={block} />;
    case 'IMAGE':
      return <ArticleImageBlock key={block.id} block={block} />;
    default:
      return null;
  }
};

export const ArticleDetails = ({ id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article-details');

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton width={200} height={200} borderRadius="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = <Text align="center" theme="error" title={t('notFound')} />;
  } else {
    content = (
      <>
        <Avatar size={200} src={article?.img} />
        <Text title={article?.title} text={article?.subtitle} />
        <>
          <div className={styles.info}>
            <EyeIcon />
            <Text text={String(article?.views)} />
          </div>
          <div className={styles.info}>
            <CalendarIcon />
            <Text text={article?.createdAt} />
          </div>
        </>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicReducerLoader reducers={usedReducers}>
      <div className={styles.articleDetails}>{content}</div>
    </DynamicReducerLoader>
  );
};
