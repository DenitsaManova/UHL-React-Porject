import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Login from '../components/Login/Login';
import Regsiter from '../components/Register/Register';
import Create from '../components/Create/Create';
import Posts from '../components/Posts/Posts';
import Details from '../components/Details/Details';
import Logout from '../components/Logout/Logout';



function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home);
  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
    navigate(Path.Home);

  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    isAuthenticated: !!auth.email,
  }

  return (
    <AuthContext.Provider value={values}>
      <div>
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          {/* TODO: Add route for edit page */}
          <Route path={Path.Posts} element={<Posts />} />
          <Route path={Path.PostDetails} element={<Details />} />
          <Route path={Path.CreatePost} element={<Create />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Regsiter />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default App
