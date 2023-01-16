import Router from './routes'
import ThemeProvider from './theme'
import './App.css'
function App() {
  return (
    <div className='app'>
      <ThemeProvider>
        <Router /> 
      </ThemeProvider>
    </div>
  );
}

export default App;
