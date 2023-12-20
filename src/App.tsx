import '@/styles/base.scss';
import { AuthProvider } from './configs/AuthContext';
import store from './configs/store/store';
import Template from './pages/Template';

function App() {
  return (
    <AuthProvider store={store}>
      <Template />
    </AuthProvider>
  );
}

export default App;
