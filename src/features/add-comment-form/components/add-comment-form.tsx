import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/components/button';
import { Input } from 'shared/components/input';
import { DynamicReducerLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { getAddCommentFormText } from '../model/selectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../model/slices/add-comment-form-slice';

import styles from './add-comment-form.module.scss';

export interface AddCommentFormProps {
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    if (text) {
      onSendComment(text);
      onCommentTextChange('');
    }
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicReducerLoader reducers={reducers}>
      <div className={styles.form}>
        <Input
          className={styles.input}
          value={text}
          placeholder={t('addTextComment')}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler}>{t('send')}</Button>
      </div>
    </DynamicReducerLoader>
  );
};

export default AddCommentForm;
