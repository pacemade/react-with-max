import React from 'react';

const UserInput = (props) => {

  const style = {
    border: '1px solid blue',
  }

  return (
    <div className="UserInput">
      <input
        type='text'
        style={style}
        onChange={props.changed}
        value= {props.username}
      />
    </div>
  )
}

export default UserInput;
