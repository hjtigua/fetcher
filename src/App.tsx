import React from 'react';
import logo from './logo.svg';
import './App.css';
import FooScreen from './screens/FooScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Foo2Screen from './screens/Foo2Screen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<FooScreen />} />
            <Route path="/page2" element={<Foo2Screen />} />
          </Routes>
        </header>
      </div>

    </BrowserRouter>
  );
}

export default App;
