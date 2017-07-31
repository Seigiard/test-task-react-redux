import React from 'react';

export default (props) => (
  <form onSubmit={props.onSubmit}>
    <label>
      Login
      <input disabled={props.disabled} type="text" value={props.login} name="login" id="login"
             onChange={props.onInputChange}/>
    </label>
    <label>
      Password
      <input disabled={props.disabled} type="password" value={props.password} name="password" id="password"
             onChange={props.onInputChange}/>
    </label>
    <button disabled={props.disabled} type="submit">Login</button>
  </form>
)
