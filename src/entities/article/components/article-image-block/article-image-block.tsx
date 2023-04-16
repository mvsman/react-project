import { memo } from 'react';
import { Text } from 'shared/components/text';

import { ArticleImage } from '../../model/types/article';
import styles from './article-image-block.module.scss';

interface ArticleImageBlockProps {
  block: ArticleImage;
}

export const ArticleImageBlock = memo(({ block }: ArticleImageBlockProps) => (
  <div>
    <img className={styles.img} src={block.src} alt="" />
    {block.title && <Text text={block.title} align="center" />}
  </div>
));
