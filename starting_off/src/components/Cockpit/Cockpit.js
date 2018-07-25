import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red );
  }
  if (props.persons.length <= 1) {
    assignedClasses.push( classes.bold );
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi its me and I am a React App</h1>
      <p className={assignedClasses.join(' ')}>Oh shit its working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Show Names</button>
    </div>
  );
};

export default cockpit;
