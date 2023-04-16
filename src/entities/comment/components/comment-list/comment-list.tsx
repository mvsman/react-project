import { Text } from 'shared/components/text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../comment-card/comment-card';
import styles from './comment-list.module.scss';

interface CommentListProps {
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = ({ comments, isLoading }: CommentListProps) => {
  if (isLoading) {
    return (
      <div className={styles.list}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text="Комментариев не найдено" />
      )}
    </div>
  );
};
