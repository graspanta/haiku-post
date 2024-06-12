import { Card, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSignOut } from '../hooks/useSignOut';

export const SignOut = () => {
  const { signout } = useSignOut();

  useEffect(() => {
    signout();
  });

  return (
    <Card
      variant="outlined"
      style={{ width: '95%', maxWidth: 550, padding: '50px 70px', textAlign: 'center' }}
    >
      <CircularProgress size={70} thickness={4} style={{ marginBottom: 40 }} />
      <Typography variant="h6">ログアウト中</Typography>
    </Card>
  );
};
