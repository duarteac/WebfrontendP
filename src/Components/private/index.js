import React from 'react';

function Private(props) {
  const signout = () => {
    props.setAuthentication(false);
  }
  return (
    <div>
      <h1>Private</h1>
      <button onClick={signout}>Logout</button>
    </div>
  );
}

export default Private;