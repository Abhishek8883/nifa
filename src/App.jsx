import * as React from 'react';
import Header from "./components/layout/header/Header";
import Carousel from "./components/carousel/Carousel";
import Welcome from "./components/welcome/Welcome";
import Courses from './components/courses/Courses';
import Gallery from './components/studentWork/gallery.jsx';
import Footer from './components/layout/footer/Footer';
import OnlineClass from './components/onlineClasses/OnlineClass';
import Testimonial from './components/testimonial/Testimonial';
import Menubar from './components/layout/menu/Menubar';
import Update from './components/updates/Update';

function App() {
 
  return (
    <>  
    <Header />
    <Menubar />
    <Carousel />
    <Update />
    <Welcome />
    <OnlineClass />
    <Courses />
    <Gallery />
    <Testimonial />
    <Footer />
    </>
  )
}

export default App
