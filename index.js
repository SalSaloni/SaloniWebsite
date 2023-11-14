import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/Projects';

const projects = [
  {
    "name": "PandaSpeaks",
    "link": "link",
    "description": "Game that helps autistic students learn english"
  },

  {
    "name": "StreetSmart",
    "link":  "link2",
    "description": "App that helps find food under a budget for college students"
  },

  {
    "name": "Coronator",
    "link": "link3",
    "description": "Maze game that helps students learn about COVID-19 Risks"
  }
];

ReactDOM.render(
  <UserList users={usersData}/>,
  document.getElementById('root')
);