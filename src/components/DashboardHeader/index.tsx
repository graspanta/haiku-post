import { BrushTwoTone, HomeOutlined } from '@mui/icons-material';
import { AppBar, Avatar, Button, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
// import { SignOutButton } from '../SignOutButton';
// import { SearchBar } from './SearchBar';
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
        <div style={{ display: 'flex' }}>
          <Link to="/">
            <HomeOutlined color="action" sx={{ fontSize: 40 }} />
            {/* <IconButton>ホーム</IconButton> */}
          </Link>
          <Link to="/about">
            <IconButton>はいく</IconButton>
          </Link>
        </div>

        {/* <SearchBar /> */}

        {globalUser ? (
          <>
            <div style={{ display: 'flex' }}>
              <Link to="/compose">
                <IconButton>
                  <BrushTwoTone sx={{ fontSize: 40 }} />
                  つくる
                </IconButton>
              </Link>

              <Link to="/mypage">
                <IconButton>
                  <Avatar />
                </IconButton>
              </Link>
              {/* <SignOutButton /> */}
            </div>
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
