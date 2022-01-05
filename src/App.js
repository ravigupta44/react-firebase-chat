import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
      <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
