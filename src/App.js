import './App.css';
import Home from './routes/home.component';
import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navigation.component';
import Authentication from './routes/authentication.component';

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
          <Route path='auth' element={ <Authentication /> }/>
      </Route>
    </Routes>
  );
}

export default App;
