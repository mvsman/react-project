import { cn } from 'shared/lib';
import { Text } from 'shared/components/text';
import { Card } from 'shared/components/card';
import { Avatar } from 'shared/components/avatar';
import { Button } from 'shared/components/button';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Skeleton } from 'shared/components/skeleton';

import { Article, ArticleText, ArticleView } from '../../model/types/article';
import { ArticleTextBlock } from '../article-text-block/article-text-block';

import styles from './article-list-item.module.scss';

interface ArticleListItemSkeletonProps {
  view: ArticleView;
}

export const ArticleListItemSkeleton = ({
  view,
}: ArticleListItemSkeletonProps) => {
  if (view === 'list') {
    return (
      <div className={cn(styles.item, {}, [styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton width={150} height={16} />
            <Skeleton width={150} height={16} className={styles.date} />
          </div>
          <Skeleton className={styles.title} width={250} height={24} />
          <Skeleton className={styles.img} height={300} />
          <div className={styles.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(styles.item, {}, [styles[view]])}>
      <Card className={styles.card}>
        <div className={styles.imgWrap}>
          <Skeleton className={styles.img} width={200} height={200} />
        </div>
        <div className={styles.infoWrap}>
          <Skeleton width={200} height={16} />
        </div>
        <Skeleton className={styles.title} width={200} height={16} />
      </Card>
    </div>
  );
};
