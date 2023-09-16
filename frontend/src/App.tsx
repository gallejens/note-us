import { FC } from 'react';
import { useMainStore } from './stores/useMainStore';

export const App: FC = () => {
  const { count, increaseCount } = useMainStore();

  return (
    <>
      <div
        onClick={() => {
          increaseCount();
        }}
      >
        {count}
      </div>
    </>
  );
};
