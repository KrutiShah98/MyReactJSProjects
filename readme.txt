NOde js: environment for javascript -using of node we can execute and run js files which is provide npm and npx


=>npm:node package manager-using of npm we can install packages

=>npx:node package executer - using of npx we can execute package


================================

LTS: LONG TERM SUPPORT

need to chack version of node js

node -v
npm -v

============================
for  react installation:

npm install create-react-app

or

npm install -g create-react-app

===============================
for project creation(traditional method)

npx create-react-app <projectname>

cd projectname (change directory)

 npm start


===================================

create react app(CRA) it increased development and build time whe the project size increased

vite:  next-generation front end tool that focuses on speed and performance

two major parts
1) A development server
2) A build command


npm run dev
======================
package.json : which main configuration file of the project which is contain install package (dependency) name and version name

    "dependecies":{
        "react":"18.2.0",
        "react-dom:"^18.2.0"
    },

    package-lock.json:contain all in detail information of installed  dependecies

    index.html: main render file

=================================================

components: components are block of code,which we can reuse.

it is the combination of html,css,javascript
using of components we can build UI easily.

react js all about components,single responsbility

Type of components

1) function components:simple javascript function
2) class components: ES6 classes to create class components class components little more complex than function components

=========================================================

component: block of code,which we can reuse anywhere many times

e.g <App/>

ReactDom : using of ReactDom we can render component on browser.

jsx: javascript can allow html element in it

    jsx convert html tag into react element.

    ======================================================


    app.jsx=> file me rfc (react function component)likhana


    export default function App(){
        return(
            <div>
            <h1>Hello</h1>
            <h1>Hello</h1>
            </div>
        )
    }


flow for component calling

index.html====> main.jsx=======>app.jsx

===================================================

state : state is a behaviou of component

it is mutable property (we can change it)

for ,, car - color-black  at purchase
	car - color-white at delivery 

here ,we are changing state of car color


=====================================================

There are two types of components

1)Function component: easy to understand
2)Class component: it is complex to use-it is inherited by component class

class component have render() method which return jsx
in function component there is direct return jsx

====================================================

Spread Operator: it is denoted by ...
		To combine multiple array in single array its called spread operator	

e.g
var myarray=['c','c++','python']
console.log(myarray)
var newArray=[...myarray]
console.log(newArray)
['c','c++','python']

e.g.2
var arr1=['1','2','3']
var arr2=['4','5','6']

var arr3=[...arr1,...arr2]
console.log(arr3)

=> ['1','2','3','4','5','6']


======================================================
props: property of components

using of props we can transfer data parent component to child  component 
props are immutable  (we cant change its value)

<childcomponent key= "value">

=======================================================
Localstorage:is a one kind of database which is available in browser

we can store data in key and value format
if we want to store data in localstorage we can use below method

locastorage.setitem("key",value)

if we want to retrive data from localstorage we can use below method

localstorage.getitem("key")

========================================================

session storage VS localstorage

sesssion storage :sesssion storage keep value in browser or tab memory whenever we close tab or browser it will destroy session memory

this is a temporary storage specifier

capacity of this storage specifier 5-10mb= depend on browser

sessionstorage.setitem("key",value);
sessionstorage.getitem("key");


localstorage: it keep data for long time

it does not destroy data on browser close or tab close

capacity of this storage specifier 5-10mb= depend on browser

localstorage mainly use for theme setting etc.

we can manually delete record from localstorage.

both data can access by specific port or application

---------------------------------------------------------
useEffect : useEffect is a most popular hook function . 
    using of useEffect we can controll side effect of function component.

    for example : api fetching , render specific code when specific event occur.

    syntax : 

    useEffect(callback,dependencies)

    when we don't pass any dependencies it will run useEffect every time 


------------------------------
no dependencies useEffect 

    1) useEffect(callback) : it will invoke every event perform 

        or 

       useEffect(callback,[]) : no dependencies - call every time 

    2) useEffect(callback,[count]) : it depend on count 

    3) useEffect(callback,[]) : blank dependencies so it will invoke once in a program 
-------------------------------------------------------------

useRef:most popular hook

refers specific componnent
e.g on button click we can focus on input box

--------------------------------------------------------------
Routing:in simple language we can say navigation between one component to another Component
but as we know that react js is for SPA

it just replace component instead of navigate 

to manage routing in react js there is one library its called React-Router-Dom before 
use routing we have to add this dependecy in project.

#npm i react-router-dom

    