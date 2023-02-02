import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router';
import Photos from './components/Photos.js';
import Pic from './components/Pic.js';

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
function App() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li><a href="/photos">photos</a></li>
          <li><a href="/pic">pic</a></li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/photos" />} />
          <Route path='/photos' element={<Photos/>} />
          <Route path='/pic/*' element={<Pic/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
