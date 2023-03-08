import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    // Allows to proxy requests through a specified index page (by default 'index.html'),
    // useful for SPA that utilise the HTML5 History API.
    historyApiFallback: true,
    hot: true,
  };
}
