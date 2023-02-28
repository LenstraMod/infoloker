import { BrowserRouter as Router  ,Routes,Route } from "react-router-dom";
import Home from './home';
import Login from './Login';
import Register from './register';
import About from './about';
import Type from './type';
import NotFound from './notFound';
import Profile  from './profile';
import Check from './check';
import Search from './search';


const Routers = () =>{
    return(
      <Router>
        <Routes>
          <Route exact path='/' element={<Home /> } />
          <Route path='/about' element={<About /> } />
          <Route path='*' element={<NotFound /> } />
          <Route path='/login' element={<Login/> } />
          <Route path='/register' element={<Register/> } />
          <Route path ='/profile' element={<Profile />} />
          <Route path ='/check' element={<Check />} />
          <Route path='/type' element={<Type />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    )
}

export default Routers;