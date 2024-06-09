import { Menu } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
// import { useUserByIdQuery } from '../../graphql/generated';
import { useAuth } from '../../hooks/useAuth';
import { SignInWithGitHub } from '../SignInWithGitHub';
import { LogOutButton } from '../LogOutButton';

export const DashboardHeader = () => {
  const { session: isLogin } = useAuth();
  // const { data } = useUserByIdQuery({
  //   variables: { id: 'testid' },
  // });

  return (
    <AppBar elevation={0} color="inherit" enableColorOnDark>
      <Toolbar style={{ justifyContent: 'flex-start' }}>
        <Link to="/">
          <Menu color="action" sx={{ fontSize: 40 }} />
        </Link>

        <SearchBar />

        <div style={{ marginLeft: 10 }}>{isLogin ? <LogOutButton /> : <SignInWithGitHub />}</div>

        {/* <IconButton>
          <Typography>{data?.users_by_pk?.name}</Typography>
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};
