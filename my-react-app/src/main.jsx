import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const myelement=(
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <th>John</th>
    </tr>
    <tr>
      <th>Doe</th>
    </tr>
  </table>
);

class Car{
  constructor(name){
    this.brand(name);
  }

  present(){
    return "i have a "+this.brand;
  }
}
const mycar=new Car("Audy");
mycar.present();

const hello= () => "hello everyone!";
hello();
var say=(varr) => "hi"+varr;

function greeting({name,age}){
  return 
    <h1>Hello, I am {name}! You are{age} years old.</h1>
}
const hi = <h1>hello everyone, hi anna{10+10}</h1>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */
      <hi/>
    }
  </StrictMode>,
  // <h1>hello world!</h1>
  // <p>Welcome</p>
  <myelement/>,
  mycar.present(mercedes),
  hello(),
  say(),
  window.addEventListener("load",mycar.present),
  <greeting name="john" age={25}/>,
  hi

)
