import { Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Blogs from "./Components/Blogs/Blogs";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ContextProvider from "./Components/Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/checkout/:id" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
