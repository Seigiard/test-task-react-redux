import React from 'react';
import Navigation from './Navigation.jsx';

const App = (props) => (
  <div>
    <header>
      <Navigation/>
    </header>
    <main>
      {props.children}
    </main>
    <footer>
      <hr/>
      <small>Development: 29.07.2017—01.08.2017. Total time: 12 hours.</small>
    </footer>
  </div>
);

export default App;
