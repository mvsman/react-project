import { memo } from 'react';
import { Code } from 'shared/components/code';
import { ArticleCode } from '../../model/types/article';

interface ArticleCodeBlockProps {
  block: ArticleCode;
}

export const ArticleCodeBlock = memo(({ block }: ArticleCodeBlockProps) => (
  <div>
    <Code text={block.code} />
  </div>
));
