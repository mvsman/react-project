import { RoutesPath } from 'app/providers/router/config/router-config';
import { AppLink } from 'shared/components/app-link';
import { Avatar } from 'shared/components/avatar';
import { Skeleton } from 'shared/components/skeleton';
import { Text } from 'shared/components/text';
import { Comment } from '../../model/types/comment';

import styles from './comment-card.module.scss';

interface CommentCardProps {
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = ({ comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={styles.card}>
        <div className={styles.user}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={styles.card}>
      <AppLink
        to={`${RoutesPath.profile}${comment?.user.id}`}
        className={styles.user}
      >
        <Avatar src={comment?.user.avatar ?? ''} size={30} isCircle />
        <Text title={comment?.user.username} />
      </AppLink>
      <Text text={comment?.text} />
    </div>
  );
};
