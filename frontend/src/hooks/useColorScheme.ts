import { ColorScheme } from '@mantine/core';
import {
  useLocalStorage,
  useColorScheme as usePreferredColorScheme,
} from '@mantine/hooks';

export const useColorScheme = () => {
  const preferredColorScheme = usePreferredColorScheme('dark');

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (override?: ColorScheme) => {
    setColorScheme(override ?? (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return { colorScheme, toggleColorScheme };
};
