import React, { lazy, Suspense } from 'react'
import Seection from './Seection'
// import Header from './Header'
// import Banner from './Banner'
const header=lazy(()=>import("./Header"))
const Banner=lazy(()=>import("./Banner"))
const section=lazy(()=>import("./Seection"))

export default function Home() {
  return (
    <div>

        <h1>HOme</h1>
        <Suspense fallback={<h3>PLease Wait...........LOading</h3>}>
        <Header/>

        </Suspense>

        <Suspense fallback={<h3>Banner loading........</h3>}>
<Banner/>
<Seection/>
        </Suspense>
    </div>
  )
}
