import './App.css';
import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import Main from './components/Main/Main';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      { isLoading  ? <Loading /> : <Main /> }
    </div>
  );
}

export default App;
