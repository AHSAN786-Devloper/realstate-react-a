import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './Screens/HomeScreen/Home';
import { Route, Routes } from 'react-router-dom'
import ProductDescription from './Screens/ProductDescriptionScreen/ProductDescription';
import Listing from './Screens/ListingScreen/Listing';
import ContactUs from './Screens/ContactUs/ContactUs';
import AboutUs from './Screens/AboutUs/AboutUs';
import BackToTop from './CommonScreens/BackToTop/BackToTop';

function App() {
  return (
    <>
    <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<ProductDescription />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
