import { atom } from 'recoil';

export const ScrollPositionRecoil = atom<number>({
  key: 'ScrollPositionRecoil',
  default: 0,
});
