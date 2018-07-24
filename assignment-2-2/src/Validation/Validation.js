import React from 'react';

const validation = (props) => {
  let validationMessage = "Text is too short!"

  if (props.charLength >= 5) {
    validationMessage = "Text is gud buddy!"
  };

  return(
    <div>
      <p>Number of letters: {props.charLength}</p>
      <p>{validationMessage}</p>

    </div>
  )
};

export default validation;
