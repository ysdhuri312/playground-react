/** @format */

import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import ProductInfo from './components/ProductInfo';
import UserList from './components/UserList';
import Person from './components/Person';
import Button from './components/Button';
import Counter from './hooks/Counter';

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Greeting />
      <ProductInfo />
      <UserList />
      <Person name='Yogesh' age='31' />
      <Button>Hello</Button>
      <Counter />
      <Footer />
    </>
  );
};
export default App;
