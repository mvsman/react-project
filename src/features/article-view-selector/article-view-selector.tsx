import { memo } from 'react';

import { ArticleView } from 'entities/article';
import { Button } from 'shared/components/button';
import GridIcon from 'shared/assets/icons/grid.svg';
import ListIcon from 'shared/assets/icons/list.svg';

import styles from './article-view-selector.module.scss';

interface ViewTypes {
  view: ArticleView;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

interface ArticleViewSelectorProps {
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes: ViewTypes[] = [
  {
    view: 'grid',
    Icon: GridIcon,
  },
  {
    view: 'list',
    Icon: ListIcon,
  },
];

export const ArticleViewSelector = memo(
  ({ view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (view: ArticleView) => () => {
      if (onViewClick) {
        onViewClick(view);
      }
    };

    return (
      <div>
        {viewTypes.map(({ view: v, Icon }) => (
          <Button
            className={view === v && styles.active}
            key={v}
            theme="clean"
            onClick={onClick(v)}
          >
            <Icon />
          </Button>
        ))}
      </div>
    );
  }
);
