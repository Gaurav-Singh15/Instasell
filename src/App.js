import React from 'react';
import { AppProvider } from '@shopify/polaris';
import Navbar2 from './Components/Navbar2';

function App() {
  return (
    <AppProvider>
    <Navbar2/>
    </AppProvider>
  );
}

export default App;