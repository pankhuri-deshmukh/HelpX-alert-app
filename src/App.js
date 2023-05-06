import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Listings from './pages/listings'
import Resources from './pages/resources'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import About from './pages/about'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/listings' element={<Listings/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
        
      </Routes>
    <Footer />
    </>
  );
}
 
export default App;
