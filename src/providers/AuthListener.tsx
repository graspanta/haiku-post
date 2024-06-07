// import useAuth from './hooks/useAuth';
// import LogoutButton from './LogoutButton';

interface Props {
  children: React.ReactNode;
}

export const AuthListener = ({ children }: Props) => {
  //   const { session: isLogin } = useAuth();

  return (
    <div>
      <header>
        {/* <div>{isLogin && <LogoutButton />}</div> */}
        header
      </header>
      <main>{children}</main>
    </div>
  );
};
