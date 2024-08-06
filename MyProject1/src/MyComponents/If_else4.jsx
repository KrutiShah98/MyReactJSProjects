import React from 'react'
import Profile from './Profile';
import LoginPAge from './LoginPAge';

export default function If_else4() {
    const isloggedin = true;

    if(isloggedin)
    {
        return <Profile/>;
    }else
    {
        return <LoginPAge/>;
    }
  
}
