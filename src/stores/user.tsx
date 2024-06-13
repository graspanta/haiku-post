import { atom } from 'recoil';
import { Users } from '../graphql/generated';

export type GlobalUserType =
  | Pick<Users, 'id' | 'name' | 'email' | 'avatar_url' | 'created_at' | 'updated_at'>
  | undefined;

export const GlobalUser = atom<GlobalUserType>({
  key: 'GlobalUser',
  default: undefined,
});
