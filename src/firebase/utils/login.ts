import { fireAuth } from '../config';

export interface FireLoginType {
  email: string;
  password: string;
}

export const login = ({ email, password }: FireLoginType) =>
  fireAuth.signInWithEmailAndPassword(email, password);
