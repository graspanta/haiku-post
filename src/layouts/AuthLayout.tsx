import { Outlet } from 'react-router-dom';

const APP_BAR = 64;

export const AuthLayout = () => {
  return (
    <div>
      <div
        style={{
          paddingTop: APP_BAR + 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100%',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};
