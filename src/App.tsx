// import NoPortalExample from './components/Modals/NoPortalExample/NoPortalExample';
// import PortalExample from './components/Modals/PortalExample/PortalExample';
// import styles from './App.module.css';
// import Counter from './components/Counter/Counter';

import React from 'react';
import CounterRedux from './components/CounterRedux/CounterRedux';
import { useSelector } from 'react-redux';


export default function App() {
  
  return (
    <>
      <CounterRedux />
    </>
  );
}