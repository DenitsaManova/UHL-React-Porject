import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Regsiter from './components/Register/Register';
import Create from './components/Create/Create';
import Posts from './components/Posts/Posts';
import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';
import Edit from './components/Edit/Edit';
import ErrorBoundary from './components/ErrorBoundary';



function App() {

  return (
    <ErrorBoundary>
    <AuthProvider>
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
          <Route path={Path.EditPost} element={<Edit />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
