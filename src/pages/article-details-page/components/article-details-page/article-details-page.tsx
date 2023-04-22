/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';

import { AddCommentForm } from 'features/add-comment-form';
import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';
import { Page } from 'widgets/page';
import { Text } from 'shared/components/text';
import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/article-details-comments-slice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetch-comments-by-article-id';
import { addCommentForArticle } from '../../model/services/add-comment-for-article';

import styles from './article-details-page.module.scss';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return <Page>{t('notFound', { ns: 'article-details' })}</Page>;
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page>
        <ArticleDetails id={id} />
        <Text className={styles.commentTitle} title={t('comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicReducerLoader>
  );
};

export default memo(ArticleDetailsPage);
