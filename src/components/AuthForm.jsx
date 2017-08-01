import React from 'react';

export default ({login, password, disabled, onInputChange, onSubmit}) => (
  <form onSubmit={onSubmit}>
    <label>
      Login
      <input disabled={disabled} type="text" value={login} name="login" id="login"
             onChange={onInputChange}/>
    </label>
    <label>
      Password
      <input disabled={disabled} type="password" value={password} name="password" id="password"
             onChange={onInputChange}/>
    </label>
    <button disabled={disabled} type="submit">Login</button>
  </form>
)
