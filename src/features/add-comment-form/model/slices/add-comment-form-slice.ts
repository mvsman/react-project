import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormShema } from '../types/add-comment-form';

const initialState: AddCommentFormShema = {
  text: '',
  error: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
