import { create } from 'zustand';

type Vector = {
  scrollX: number;
  scrollY: number;
};

type Action = {
  updateScrollX: (scrollX: Vector['scrollX']) => void;
  updateScrollY: (scrollY: Vector['scrollY']) => void;
};

const useScrollStore = create<Vector & Action>((set) => ({
  scrollX: 0,
  scrollY: 0,
  updateScrollX: (currentX) => set(() => ({ scrollX: currentX })),
  updateScrollY: (currentY) => set(() => ({ scrollY: currentY })),
}));

export { useScrollStore };
