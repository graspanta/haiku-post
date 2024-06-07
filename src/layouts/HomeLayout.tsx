import { Outlet } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';

const APP_BAR = 64;

export const HomeLayout = () => {
  return (
    <>
      <DashboardHeader />
      <div style={{ paddingTop: APP_BAR + 30 }}>
        <Outlet />
      </div>
    </>
  );
};
