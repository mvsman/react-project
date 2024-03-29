/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import { Text } from 'shared/components/text';
import { ArticleText } from '../../model/types/article';

import styles from './article-text-block.module.scss';

interface ArticleTextBlockProps {
  block: ArticleText;
  className?: string;
}

export const ArticleTextBlock = memo(
  ({ block, className }: ArticleTextBlockProps) => (
    <div className={className}>
      {block.title && <Text className={styles.title} title={block.title} />}
      {block.paragraphs.map((paragraph, index) => (
        <Text className={styles.paragraph} key={index} text={paragraph} />
      ))}
    </div>
  )
);
