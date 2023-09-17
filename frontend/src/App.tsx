import { FC } from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Notifications } from './components/notifications';
import { ErrorBoundary } from 'react-error-boundary';
import { useColorScheme } from './hooks/useColorScheme';

export const App: FC = () => {
  const { colorScheme } = useColorScheme();

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...theme, colorScheme }}
      >
        <Notifications maxItems={3} />
      </MantineProvider>
    </ErrorBoundary>
  );
};
