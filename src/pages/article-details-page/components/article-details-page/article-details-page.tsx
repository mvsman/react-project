/* eslint-disable i18next/no-literal-string */
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';

import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';
import { Text } from 'shared/components/text';
import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/article-details-comments-slice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetch-comments-by-article-id';

import styles from './article-details-page.module.scss';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return <div>{t('notFound')}</div>;
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <div>
        <ArticleDetails id={id} />
        <Text className={styles.commentTitle} title={t('comments')} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
