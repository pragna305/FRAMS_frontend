import './App.css';
import File from './File';
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header';
import Login from  './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import F11 from './components/F11';
import Information from './components/Information';
import Apply from './components/Apply';
import Postajob from './components/Postajob';
import Vacancies from './components/Vacancies';
import Ab from './components/Ab';
import Signup from './components/Signup';
import Header1 from './components/Header1';

function App() {
  return (
    <Routes>
<Route path='/' element={<Home/>}>
  </Route>
  <Route path='Home' element={<Home/>}></Route>
  <Route path='Login' element={<Login/>}>
  </Route>
  <Route path='Header' element={<Header/>}></Route>
  <Route path='Header1' element={<Header1/>}></Route>
  <Route path='About' element={<About/>}></Route>
  <Route path='Signup' element={<Signup/>}></Route>
  <Route path='Contact' element={<Contact/>}></Route>
  <Route path='F11' element={<F11/>}></Route>
  <Route path='Information' element={<Information/>}></Route>
  <Route path='Apply' element={<Apply/>}></Route>
  <Route path='Postajob' element={<Postajob/>}></Route>
  <Route path='Vacancies' element={<Vacancies/>}></Route>
  <Route path='Ab' element={<Ab/>}></Route>
</Routes>
    //  <div className="App">
    //   {
    //     // <File/>
    // }
    //   </div>
  );
}

export default App;
