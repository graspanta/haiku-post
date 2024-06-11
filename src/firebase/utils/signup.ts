import { fireAuth } from '../config';

export interface FireSignupType {
  email: string;
  password: string;
}

export const signup = ({ email, password }: FireSignupType) =>
  fireAuth.createUserWithEmailAndPassword(email, password);
