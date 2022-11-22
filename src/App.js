import './App.css';
import Home from './routes/home.component';
import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navigation.component';
import SignIn from './routes/sign-in.component';

const Shop = () => {
  return (
    <div>
      I am the shop page
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <NavBar/> }>
        <Route index element={ <Home /> } /> 
          <Route path='shop' element={ <Shop /> } />
          <Route path='signin' element={ <SignIn /> }/>
      </Route>
    </Routes>
  );
}

export default App;
