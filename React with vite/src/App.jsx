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
import Switcher from './components/Switcher';
import BasicEffect from './components/BasicEffect';
import CounterEffect from './components/CounterEffect';
import FetchData from './components/FetchData';
import L1 from './components/L1';
import { createContext } from 'react';

export const Name = createContext();
export const Age = createContext();

const App = () => {
  const name = 'DHURI';
  const age = 30;
  return (
    <>
      {/* <Header />
      <MainContent />
      <Greeting />
      <ProductInfo />
      <UserList />
      <Person name='Yogesh' age='31' />
      <Button>Hello</Button>
      <Counter />
      <Switcher />
      <Footer /> */}

      {/* <BasicEffect />
      <CounterEffect />
      <FetchData /> */}
      <Name.Provider value={name}>
        <Age.Provider value={age}>
          <L1 />
        </Age.Provider>
      </Name.Provider>
    </>
  );
};
export default App;
