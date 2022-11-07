import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home";


import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/footer.scss"
import "./styles/home.scss"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path= "/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
