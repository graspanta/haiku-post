import { fireAuth } from '../config';

export const rememberMe = (email: string) => fireAuth.sendPasswordResetEmail(email);
