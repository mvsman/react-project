import { Suspense } from 'react';

import { useTheme } from 'shared/contexts';
import { cn } from 'shared/lib';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      {/* i18n translations might still be loaded by the http backend */}
      {/* use react's Suspense */}
      <Suspense fallback="">
        <Navbar />
        <div className="page-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
