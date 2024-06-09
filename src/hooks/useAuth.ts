import supabase from '../supabase/client';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [session, setSessions] = useState<Session | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const { data: authData } = supabase.auth.onAuthStateChange((_, session) => {
      setSessions(session);
    });

    return () => authData.subscription.unsubscribe();
  }, []);

  const signInWithGithub = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'github' });
      if (error) {
        setError(error.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else if (typeof error === 'string') {
        setError(error);
      } else {
        console.error('Failed to connect GitHub');
      }
    }
  };

  const profileFromGithub: {
    nickName: string;
    avatarUrl: string;
  } = {
    nickName: session?.user?.user_metadata.user_name,
    avatarUrl: session?.user?.user_metadata.avatar_url,
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return {
    session,
    error,
    profileFromGithub,
    signInWithGithub,
    signOut,
  };
};
