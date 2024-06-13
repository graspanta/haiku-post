import { fireAuth } from '../firebase/config';
import { useSetRecoilState } from 'recoil';
import { AuthCredential } from '../stores/authCredential';
import { AuthCredentialLoaded } from '../stores/authCredentialLoaded';
import { useEffect, PropsWithChildren } from 'react';

export const AuthListener = ({ children }: PropsWithChildren<{}>) => {
  const setCredential = useSetRecoilState(AuthCredential);
  const setLoaded = useSetRecoilState(AuthCredentialLoaded);

  useEffect(() => {
    const unsubscriber = fireAuth.onAuthStateChanged(async credential => {
      setCredential(credential?.uid || undefined);
      setLoaded(true);
    });

    return unsubscriber;
  });

  return <>{children}</>;
};
