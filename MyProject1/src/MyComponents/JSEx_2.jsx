import React from 'react'

export default function JSEx_2() {
    const status= true;
  return (
    <div>
        {/* { &&: logical And OPerator} */}

        {status && <h1>Hello user</h1>}

        {/* status && <h1>Hello user</h1> will return error */}
    </div>
  )
}
