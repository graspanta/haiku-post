import { useRef, useState } from 'react';
import { SetErrorFn, useAuthHelper } from './useAuthHelper';
import { rememberMe } from '../firebase/utils/rememberMe';

export const useRememberMe = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [sendSuccess, setSendSuccess] = useState(false);
  const formValidation = (setError: SetErrorFn) => {
    if (!emailRef.current?.value) {
      setError('email', 'メールアドレスを入力してください。');
      return true;
    }
    return false;
  };

  const sendEmail = async () => {
    await rememberMe(emailRef.current?.value || '');
    setSendSuccess(true);
  };

  const { authExecute, error, loading } = useAuthHelper(sendEmail, formValidation);

  return {
    ref: {
      emailRef,
    },
    loading,
    error,
    sendEmail: authExecute,
    sendSuccess,
  };
};
