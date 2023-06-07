import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Components/Router';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
