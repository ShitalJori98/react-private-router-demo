import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
         <Switch>
        {/*  restricted = false meaning public route
        restricted = true meaning restricted route */}
           <PublicRoute restricted ={false} isLogin={true} component = {Home} path ="/" exact/>
           <PublicRoute restricted={false}  isLogin={true} component={SignIn} path="/signin" exact />

          <PrivateRoute isLogin={false} component={Dashboard} path="/dashboard" exact />

         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
