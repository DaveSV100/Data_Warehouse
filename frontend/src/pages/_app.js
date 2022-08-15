import AppContext from '@context/AppContext';
import { ProviderAuth } from '@hooks/useAuth';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';
// import '@styles/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <ProviderAuth>
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
    </ProviderAuth>
  );
}

export default MyApp;