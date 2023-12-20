import Home from '@/pages/Home';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Logout from './session/Logout';
import NotFound from './session/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route path="/" element={<Home />} />
      <Route path="/redirect" element={<Home />} />
      <Route path="/logout" element={<Logout />} />
    </Route>
  ),
  { basename: import.meta.env.VITE_APP_PUBLIC_URL }
);

export default function LoggedRoutes() {
  return <RouterProvider router={router} />;
}
