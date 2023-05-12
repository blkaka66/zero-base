import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist(); 
export const isLoggedInAtom = atom({
  key: 'isLoggedIn',
  default: false,
  effects_UNSTABLE: [persistAtom], 
});

export const isAdminAtom = atom({
    key: 'isAdmin',
    default: false,
    effects_UNSTABLE: [persistAtom], 
  });


export const nickNameAtom = atom({
  key: 'nickName',
  default: "",
  effects_UNSTABLE: [persistAtom], 
});

export const idAtom = atom({
  key: 'ID',
  default: "",
  effects_UNSTABLE: [persistAtom], 
});