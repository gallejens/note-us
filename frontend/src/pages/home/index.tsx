import { FC } from 'react';
import { Button,useMantineColorScheme } from '@mantine/core';

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
