import React from 'react'
import Profile from './Profile';
import LoginPAge from './LoginPAge';


export default function JS_Ex3() {

    const islogin = true;
    return (
        <div>
            {/* ternary operator or conditional operator
ternary operator divided in 3 parts

and it represents with ? :

syntax: exp1  ? exp2  :  exp3
if exp1 tru it will execute exp2 otherwise it will execute exp3 */}


            {islogin ? <Profile /> : <LoginPAge/>}
        </div>
    )
}
