import logo from './logo.svg';
import './App.css';
import Todo from '../src/components/toapp'
import Land from '../src/components/landingpage'

import { BrowserRouter, Routes, Route } from "react-router-dom";function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Land/>}/>
        <Route path="/todos" element={<Todo/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
