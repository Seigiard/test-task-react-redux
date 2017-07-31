import React from 'react';

export default (props) => (
  <form onSubmit={props.onSubmit}>
    <label>
      Login
      <input type="text" value={props.login} name="login" id="login" onChange={props.onInputChange}/>
    </label>
    <label>
      Password
      <input type="password" value={props.password} name="password" id="password" onChange={props.onInputChange}/>
    </label>
    <button type="submit">Login</button>
  </form>
)
