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
    <footer></footer>
  </div>
);

export default App;
