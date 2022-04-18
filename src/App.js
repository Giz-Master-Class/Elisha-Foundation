import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Header} from './Components/Header/Header'
import {HomePage} from './Components/HomePage/HomePage'
import {AboutPage} from './Components/AboutPage/AboutPage'
import {ContactPage} from './Components/ContactPage/ContactPage'
import {BlogPage} from './Components/BlogPage/BlogPage'
import {DonatePage} from './Components/DonatePage/DonatePage'


function App() {
  return (
    <>
      <Router>
        <Header/> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact'  element={<ContactPage />} />
          <Route path='/blog'  element={<BlogPage />} />
          <Route path='/donate'  element={<DonatePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
