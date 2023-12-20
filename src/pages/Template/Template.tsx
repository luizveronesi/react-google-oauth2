import useLoggedUser from '@/configs/LoggedUser';
import LoggedRoutes from '@/routes/LoggedRoutes';
import PublicRoutes from '@/routes/PublicRoutes';
import './styles.scss';

function Template() {
  const loggedUser = useLoggedUser();
  return loggedUser.email ? (
    <LoggedRoutes />
  ) : (
    <>
      <PublicRoutes />
    </>
  );
}

export default Template;
