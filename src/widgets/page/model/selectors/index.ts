import { StateSchema } from 'app/providers/store-provider';

export const getPageScroll = (state: StateSchema) => state.page.scroll;

export const getPageScrollPosition = (state: StateSchema, path: string) =>
  state.page.scroll[path] || 0;
