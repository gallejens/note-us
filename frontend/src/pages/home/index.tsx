import { useMantineColorScheme, Button } from '@mantine/core';
import { FC } from 'react';

export const HomePage: FC = () => {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <div>
      <Button onClick={() => toggleColorScheme()} variant='gradient'>
        Toggle Color Scheme
      </Button>
    </div>
  );
};
