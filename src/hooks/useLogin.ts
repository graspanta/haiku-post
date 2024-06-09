import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/client';

export const useLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const login = async () => {
    const { data } = await supabase.auth.signInWithPassword({
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
    });
    if (!data) {
      throw new Error('Failed to login');
    }
    navigate('/');
  };

  return {
    ref: {
      emailRef,
      passwordRef,
    },
    login,
  };
};
