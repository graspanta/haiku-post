import { Menu, Brush } from '@mui/icons-material';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { SignOutButton } from '../SignOutButton';
import { SearchBar } from './SearchBar';
// import { useUserByIdQuery } from '../../graphql/generated';
import { useRecoilValue } from 'recoil';
import { GlobalUser } from '../../stores/user';

export const DashboardHeader = () => {
  // const { data } = useUserByIdQuery({
  //   variables: { id: 'testid' },
  // });
  const globalUser = useRecoilValue(GlobalUser);

  return (
    <AppBar elevation={0} color="inherit" enableColorOnDark>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Link to="/">
          <Menu color="action" sx={{ fontSize: 40 }} />
        </Link>

        <SearchBar />

        {globalUser ? (
          <>
            <Link to="/compose">
              <IconButton>
                <Brush />
              </IconButton>
            </Link>
            <SignOutButton />
          </>
        ) : (
          <Button variant="outlined" color="primary" href="/login">
            ログイン
          </Button>
        )}
        {/* <IconButton>
          <Typography>{data?.users_by_pk?.name}</Typography>
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};
