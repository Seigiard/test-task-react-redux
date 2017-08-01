import React from 'react';

export default () => (
  <div>
    <h1>Borisenko Andrew</h1>
    <article>
      <p>Results-oriented professional with five years experience in javascript frontend developer and fourteen years experience in web development.</p>
      <p>I make it my goal to create applications and web-sites with the user in mind, creating applications with a useable and intuitive user interface experience. I also understand the importance of creating highly readable and easily maintainable source code.</p>
      <p>I am constantly striving to learn new technologies and look to ways to better myself in this rapidly changing industry.</p>
      <h2>Technical Skills</h2>
      <ul>
        <li>Strong experience in Web App Development;</li>
        <li>Strong Javascript & ES6/7 knowledge;</li>
        <li>Strong HTML & CSS knowledge;</li>
        <li>Experience in UI/UX, Typography and Design</li>
        <li>Experience in UI Prototyping & Wire framing</li>
        <li>Familiar with Agile and Scrum Processes</li>
      </ul>
      <dl>
        <dt>Languages:</dt>
        <dd>Vue&nbsp;(2+  years experience), Angular&nbsp;(2), Riot&nbsp;(1), Ionic&nbsp;(1), JavaScript&nbsp;(10+), HTML&nbsp;(14+), CSS&nbsp;(14+), PHP&nbsp;(5);</dd>
        <dt>TDD:</dt>
        <dd>Jest&nbsp;(1+), Karma&nbsp;(2), Mocha&nbsp;(2), Jasmine&nbsp;(2);</dd>
        <dt>Task Managers:</dt>
        <dd>Webpack&nbsp;(3+), Gulp&nbsp;(3), Grunt&nbsp;(4);</dd>
        <dt>Databases:</dt>
        <dd>PostgreSQL&nbsp;(3+); MySQL&nbsp;(5); MongoDb&nbsp;(1);</dd>
      </dl>

      <h2>My first project with React.</h2>
      <p>First time I heard about React four years ago, but never had any project on it.</p>
      <p>I spent about 16 hours to build this project from scratch.</p>
      <dl>
        <dt>Sat</dt><dd>4 hours</dd>
        <dt>Sun</dt><dd>4 hours</dd>
        <dt>Mon</dt><dd>6 hours</dd>
        <dt>Tue</dt><dd>2 hours</dd>
      </dl>
      <h3>Requirements</h3>
      <ol>
        <li>Create a git repository on github.com</li>
        <li>Implement React + Redux + React router Architecture ( es6 required!!! )</li>
        <li>Configure webpack.config.js</li>
      </ol>
      <ul>
        <li>Babel + es6</li>
        <li>Less to css compilation</li>
        <li>Implement normal project architecture (.gitignore, src, build, each component should be presented in
          separated files using es6 module system)
        </li>
      </ul>
      <ol start="4">
        <li>Create some simple markup (of course use routing for the pages, we create SPA)</li>
      </ol>
      <ul>
        <li>Authorization</li>
        <li>Main page</li>
        <li>About author</li>
      </ul>
      <ol start="5">
        <li>Draw simple map with point of your geolocation</li>
        <li>Implement zoom in/out buttons on a map
          7 .Click on a map has to create a marker
        </li>
        <li>Implement save and show buttons – save button saves all the created markers, show button – shows it</li>
        <li>When clicking on the save button all markers should be sent to the server</li>
      </ol>
      <ul>
        <li>Create a back-end (node.js + express + mongodb)</li>
        <li>Create a user api</li>
        <li>Create an api to save location array</li>
        <li>Create a GET request to fetch all saving markers</li>
        <li>Authorization (Basic auth)</li>
      </ul>
      <ol start="10">
        <li>Review <a href="http://api.2gis.ru/doc/maps/quickstart/">http://api.2gis.ru/doc/maps/quickstart/</a></li>
        <li>Create list with type of objects to be chosen (pharmacies, gas stations, schools, restaurants) so click on
          the list item has to draw markers on the map with the closest chosen objects<br/>
            <strong>Not realized, because 2GIS closed their API about companies.</strong></li>
      </ol>
    </article>
  </div>
);
