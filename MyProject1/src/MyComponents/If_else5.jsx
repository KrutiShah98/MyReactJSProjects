import React from 'react'
import Profile from './Profile';
import LoginPAge from './LoginPAge';

export default function If_else5() {

    const isloggedin = false;
let element;
    if(isloggedin)
    {
       element= <Profile/>;
    }else
    {
       
       element= <LoginPAge/>;
    }
  return element;
}
