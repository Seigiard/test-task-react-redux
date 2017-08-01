# Test task with React, React-Router, Redux and Express server with MongoDB

My first project with React. 

First time I heard about React four years ago, but never had any project on it. 

This is project on React I want to solve.

I spent about 16 hours to build this project from scratch.

## Requirements

1. Create a git repository on github.com
2. Implement React + Redux + React router Architecture ( es6 required!!! )
3. Configure webpack.config.js 
  * Babel + es6
  * Less to css compilation
  * Implement normal project architecture (.gitignore, src, build, each component should be presented in separated files using es6 module system)
4. Create some simple markup (of course use routing for the pages, we create SPA)
  * Authorization
  * Main page
  * About author
5. Draw simple map with point of your geolocation
6. Implement zoom in/out buttons on a map
7 .Click on a map has to create a marker
8. Implement save and show buttons – save button saves all the created markers, show button – shows it
9. When clicking on the save button all markers should be sent to the server
  * Create a back-end (node.js + express + mongodb)
  * Create  a user api
  * Create an api to save location array
  * Create a GET request to fetch all saving markers
  * Authorization (Basic auth)
10. Review http://api.2gis.ru/doc/maps/quickstart/
11. Create list with type of objects to be chosen (pharmacies, gas stations, schools,  restaurants) so click on the list item has to draw markers on the map with the closest chosen objects    
Not realized, because 2GIS closed their API about companies.


## Installation

    git clone https://github.com/Seigiard/test-task-react-redux.git
    cd test-task-react-redux
    yarn install
    
## Dev mode    

    yarn dev

Start up webpack and express server. 

[http://localhost:8080](http://localhost:8080)

## Prod mode 

    yarn prod
 
Build package and start up express server.

[http://localhost:3000](http://localhost:3000)
