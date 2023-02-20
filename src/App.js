import Router from './routes'
import ThemeProvider from './theme'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import './App.css'
function App() {
  return (
    <div className='app'>
      <ThemeProvider>
        <ErrorBoundary>
           <Router />  
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}

export default App;
