import { atom } from 'recoil';

export const modalState = atom({
  key: 'modal',
  default: false,
});

export const movieState = atom({
  key: 'movieState',
  default: null,
});
