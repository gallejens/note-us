import { create } from 'zustand';

export const useLoadingOverlayStore = create<{
  visible: boolean;
  setLoadingOverlayVisible: (cb: boolean | ((old: boolean) => boolean)) => void;
}>(set => ({
  visible: false,
  setLoadingOverlayVisible: cb =>
    set(s => ({ visible: typeof cb === 'function' ? cb(s.visible) : cb })),
}));
