import Router from './routes'
import ThemeProvider from './theme'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { SnackbarProvider } from 'notistack';
import './App.css'
function App() {
  return (
    <div className='app'>
      <ThemeProvider>
        <SnackbarProvider
         maxSnack={5}
         autoHideDuration={3000}
         anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'right',
         }}
         preventDuplicate
        >
        <ErrorBoundary>
           <Router />  
        </ErrorBoundary>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
