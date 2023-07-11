import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from 'use-local-storage';
import Router from './Components/Common/Router'

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")
  return (
    <div className="App" data-theme={theme}>
      <Router />
    </div>
  );
}

export default App;
