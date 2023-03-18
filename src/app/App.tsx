import { Suspense } from 'react';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { AppRouter } from './providers/router';

export const App = () => (
  <div className="app">
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
