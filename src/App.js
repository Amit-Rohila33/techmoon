import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";




import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/footer.scss"
import "./styles/home.scss"
import "./styles/contact.scss"
import "./styles/services.scss"
import "./styles/mediaquery.scss"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path= "/" element={<Home/>}/>
          <Route exact path= "/contact" element={<Contact/>}/>
          <Route exact path= "/services" element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
