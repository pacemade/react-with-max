import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
  return(
    <div className="UserOutput">
      <h1>This is your username: {props.username} </h1>
      <p>Bacon ipsum dolor amet venison sirloin frankfurter swine pastrami capicola. Andouille corned beef venison short loin pig. Swine strip steak tongue flank. Pork beef prosciutto pork loin tenderloin venison. Fatback turkey landjaeger, pig cow salami capicola ribeye strip steak chicken corned beef meatloaf short loin. Kielbasa tri-tip ham bacon tongue shank.</p>
      <p>Pig picanha turducken tenderloin short loin chuck tri-tip flank cow fatback leberkas kielbasa brisket. Turkey boudin porchetta buffalo, shoulder ham shank spare ribs chuck pork belly bresaola burgdoggen tri-tip salami tongue. Shankle short ribs pig tongue meatloaf swine chicken buffalo shank brisket turkey. Jowl sausage shank boudin jerky tongue venison chicken ball tip frankfurter doner beef ribs. Turducken pork chop porchetta, shank sausage hamburger strip steak picanha. Bacon t-bone pastrami, pork belly short loin kielbasa tail turducken sausage.</p>
    </div>
  )
}



export default UserOutput
