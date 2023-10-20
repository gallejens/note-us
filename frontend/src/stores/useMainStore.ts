import { create } from 'zustand';

export const useMainStore = create<MainStore.State & MainStore.StateActions>(
  set => ({
    count: 0,
    increaseCount: () => set(s => ({ count: s.count + 1 })),
  })
);

