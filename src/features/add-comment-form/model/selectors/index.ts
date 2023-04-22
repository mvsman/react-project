import { StateSchema } from 'app/providers/store-provider';

export const getAddCommentFormText = (state: StateSchema) =>
  state.addCommentForm?.text ?? '';

export const getAddCommentFormeError = (state: StateSchema) =>
  state.addCommentForm?.error;
