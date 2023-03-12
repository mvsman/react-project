import { Loader } from 'shared/components/loader';

import styles from './page-loader.module.scss';

export const PageLoader = () => (
  <div className={styles.loader}>
    <Loader />
  </div>
);
