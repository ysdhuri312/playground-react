/** @format */

import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import ProductInfo from './components/ProductInfo';

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Greeting />
      <ProductInfo />
      <Footer />
    </>
  );
};
export default App;
