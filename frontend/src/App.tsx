import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from '@tanstack/react-router';

import { LoadingOverlay } from './components/loadingoverlay';
import { ModalOverlay } from './components/modaloverlay';
import { Notifications } from './components/notifications';
import router from './router';
import theme from './theme';

import '@mantine/core/styles.css';

export const App: FC = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <MantineProvider theme={theme} defaultColorScheme='dark'>
        <RouterProvider router={router} />
        <LoadingOverlay />
        <ModalOverlay />
        <Notifications maxItems={3} />
      </MantineProvider>
    </ErrorBoundary>
  );
};
