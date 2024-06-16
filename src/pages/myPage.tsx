import { Container } from '@mui/material';
import { SignOutButton } from '../components/SignOutButton';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { AccountLoaded } from '../stores/accountLoaded';
import { GlobalUser } from '../stores/user';
import { useNavigate } from 'react-router-dom';
import { useUserByIdQuery } from '../graphql/generated';

export const MyPage = () => {
  const accountLoaded = useRecoilValue(AccountLoaded);
  const user = useRecoilValue(GlobalUser);
  const navigate = useNavigate();
  const { data, error } = useUserByIdQuery({
    variables: {
      id: `${user?.id}`,
    },
  });
  useEffect(() => {
    console.error(error);
  }, [error]);

  useEffect(() => {
    if (accountLoaded) {
      if (!user?.id) {
        navigate('/login');
      }
    }
  }, [accountLoaded, navigate, user?.id]);

  return (
    <Container>
      ようこそ{data?.users_by_pk?.name}!
      <div style={{marginTop: 30}}>
        <SignOutButton />
      </div>
    </Container>
  );
};
