declare const __IS_DEV__: boolean;

declare module '*.module.scss';

declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  import React from 'react';

  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
