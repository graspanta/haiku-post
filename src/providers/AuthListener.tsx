import supabase from '../supabase/client';
import { useSetRecoilState } from 'recoil';
import { AuthCredential } from '../stores/authCredential';
import { AuthCredentialLoaded } from '../stores/authCredentialLoaded';
import { useEffect } from 'react';
// import useAuth from './hooks/useAuth';
// import LogoutButton from './LogoutButton';

interface Props {
  children: React.ReactNode;
}

export const AuthListener = ({ children }: Props) => {
  const setCredential = useSetRecoilState(AuthCredential);
  const setLoaded = useSetRecoilState(AuthCredentialLoaded);

  useEffect(() => {
    const { data: authData } = supabase.auth.onAuthStateChange(async (_, session) => {
      setCredential(session?.user.id || undefined);
      setLoaded(true);
    });

    return () => authData.subscription.unsubscribe();
  });

  return <>{children}</>;
};
