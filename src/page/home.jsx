import React from 'react';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import About from '../components/about/About.jsx';
import Review from '../components/review/Review.jsx';
import Order from '../components/order/Order.jsx';
import Nav from '../components/nav/Nav.jsx';
import Dishes from '../components/dishes/Dishes.jsx';

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <Dishes />
      <About />
      <Review />
      <Order />
      <Footer />
    </>
  );
}

export default Home;