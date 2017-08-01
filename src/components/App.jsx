import React from 'react';
import Navigation from './Navigation.jsx';

const App = ({children}) => (
  <div>
    <header>
      <Navigation/>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <hr/>
      <small>Development: 29.07.2017—01.08.2017. Total time: 12 hours.</small>
    </footer>
  </div>
);

export default App;
