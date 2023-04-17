import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import { RoutesPath } from 'app/providers/router/config/router-config';
import { cn } from 'shared/lib';
import { Text } from 'shared/components/text';
import { Card } from 'shared/components/card';
import { Avatar } from 'shared/components/avatar';
import { Button } from 'shared/components/button';
import EyeIcon from 'shared/assets/icons/eye.svg';

import { Article, ArticleText, ArticleView } from '../../model/types/article';
import { ArticleTextBlock } from '../article-text-block/article-text-block';

import styles from './article-list-item.module.scss';

interface ArticleListItemProps {
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = ({ article, view }: ArticleListItemProps) => {
  const { t } = useTranslation('article-details');
  const navigate = useNavigate();
  const { id } = article;

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutesPath.article_details}${id}`);
  }, [id, navigate]);

  const types = (
    <Text className={styles.types} text={article.type.join(', ')} />
  );
  const views = (
    <>
      <Text className={styles.views} text={String(article.views)} />
      <EyeIcon />
    </>
  );

  if (view === 'list') {
    const textBlock = article.blocks.find(
      (block) => block.type === 'TEXT'
    ) as ArticleText;

    return (
      <div className={cn(styles.item, {}, [styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar isCircle size={30} src={article.user.avatar} />
            <Text className={styles.username} text={article.user.username} />
            <Text className={styles.date} text={article.createdAt} />
          </div>
          <Text className={styles.title} title={article.title} />
          {types}
          <img className={styles.img} src={article.img} alt="" />
          {textBlock && (
            <ArticleTextBlock className={styles.textBlock} block={textBlock} />
          )}
          <div className={styles.footer}>
            <Button onClick={onOpenArticle}>{t('readMore')}</Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(styles.item, {}, [styles[view]])}>
      <Card className={styles.card} onClick={onOpenArticle}>
        <div className={styles.imgWrap}>
          <img className={styles.img} src={article.img} alt="" />
          <Text className={styles.date} text={article.createdAt} />
        </div>
        <div className={styles.infoWrap}>
          {types}
          {views}
        </div>
        <Text className={styles.title} text={article.title} />
      </Card>
    </div>
  );
};
