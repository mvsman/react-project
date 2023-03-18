import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'app/App';
import { StoreProvider } from 'app/providers/store-provider';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { ThemeProvider } from 'shared/contexts';

import './app/i18n/i18n';
import './app/styles/index.scss';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
