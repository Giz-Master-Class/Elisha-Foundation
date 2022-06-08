import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Header} from './Components/Header/Header'
import {HomePage} from './Components/HomePage/HomePage'
import {AboutPage} from './Components/AboutPage/AboutPage'
import {ContactPage} from './Components/ContactPage/ContactPage'
import {BlogPage} from './Components/BlogPage/BlogPage'
import { DetailedBlogPage } from './Components/DetailedBlogPage/DetailedBlogPage';
import {DonatePage} from './Components/DonatePage/DonatePage'
import {SignIn} from './Components/SignIn/SignIn'
import {Dashboard} from './Components/Dashboard/Dashboard'
// import ProtectedRoute from './omponents/ProtectedRoute';

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
          <Route path='/detailedblog'  element={<DetailedBlogPage/>} />
          <Route path='/signin'  element={<SignIn/>} />
          <Route path='/donate'  element={<DonatePage />} />
          {/* <Route element={<ProtectedRoute />}> */}
          <Route exact path='/*' element={<Dashboard />}></Route>
        {/* </Route> */}
        </Routes>
      </Router>

    {/* <div>
      <Router>
        <Routes> */}
          {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route exact path='/*' element={<Dashboard />}></Route> */}
        {/* </Route> */}
        {/* </Routes> */}
      {/* </Router>
      </div> */}
    </>
  );
}

export default App;
