import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider, defaultTheme } from '@adobe/react-spectrum'
import { AuthProvider } from './components/auth';
import Root from './components';

const queryClient = new QueryClient()

function App() {
  return (
    <Provider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Root />
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
