import { useNavigate } from 'react-router-dom';
import { signout as fireSignout } from '../firebase/utils/signout';

export const useSignOut = () => {
  const navigate = useNavigate();

  const signout = async () => {
    await fireSignout();
    navigate('/');
  };
  return {
    signout,
  };
};
