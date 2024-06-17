import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as fireLogin } from '../firebase/utils/login';
import { SetErrorFn, useAuthHelper } from './useAuthHelper';

export const useLogIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const formValidation = (setError: SetErrorFn) => {
    let invalidValidation = false;

    if (!emailRef.current?.value) {
      setError('email', 'メールアドレスを入力してください。');
      invalidValidation = true;
    }

    if (!passwordRef.current?.value) {
      setError('password', 'パスワードを入力してください。');
      invalidValidation = true;
    }

    return invalidValidation;
  };

  const login = async () => {
    const { user } = await fireLogin({
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
    });
    if (!user?.uid) {
      throw new Error('ログインに失敗しました。');
    }
    navigate('/');
  };

  const { authExecute, error, loading } = useAuthHelper(login, formValidation);

  return {
    ref: {
      emailRef,
      passwordRef,
    },
    login: authExecute,
    error,
    loading: loading,
  };
};
