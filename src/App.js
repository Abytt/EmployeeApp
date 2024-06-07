import logo from './logo.svg';
import './App.css';
import AppEmployee from './components/AppEmployee';
import Search from './components/Search';

import Delete1 from './components/Delete1';
import View1 from './components/View1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppEmployee/>}/>
      <Route path='/Delete1' element={<Delete1/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/View1' element={<View1/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
