import { Routes, Route } from 'react-router-dom';

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Login from '../components/Login/Login';
import Regsiter from '../components/Register/Register';
import Create from '../components/Create/Create';
import Posts from '../components/Posts/Posts';


function App() {
  

  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/posts/" element={<Posts />} />
    <Route path="/posts/create" element={<Create />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Regsiter />} />

    </Routes>
    <Footer />


    </>
  )
}

export default App
