declare const __IS_DEV__: boolean;
declare const __API__: string;

declare module '*.module.scss';

declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  import React from 'react';

  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
