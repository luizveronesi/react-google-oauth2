import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './session/Login';
import NotFound from './session/NotFound';
import Unauthorized from './session/Unauthorized';
import Storage from '@/configs/Storage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route path="*" element={<Login />} />
      <Route path="unauthorized" element={<Unauthorized />} />
    </Route>
  ),
  { basename: import.meta.env.VITE_APP_PUBLIC_URL }
);

export default function PublicRoutes() {
  const setRedirectUri = () => {
    const publicUrl = import.meta.env.VITE_APP_PUBLIC_URL || '';
    const { pathname, search } = window.location;
    const uri = `${pathname.replace(publicUrl, '')}${search}`;
    if (uri && uri !== '/') Storage.setRedirectUri(uri);
  };

  setRedirectUri();

  return <RouterProvider router={router} />;
}
