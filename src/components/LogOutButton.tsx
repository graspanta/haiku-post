import { useAuth } from '../hooks/useAuth';
import { Button } from '@mui/material';

export const LogOutButton = () => {
  const { signOut } = useAuth();

  return (
    <Button onClick={signOut} variant="outlined" color="error">
      ログアウト
    </Button>
  );
};
