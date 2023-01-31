import React from 'react';
import ReactDOM from 'react-dom/client';
import Ragul from'./App';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    ///*<App />*/
    //<Ragul/>
  //</React.StrictMode>
//);*/


/*const root =*/ //ReactDOM.createRoot(document.getElementById('root')).render(<Ragul /*mark='100'*/rollno='1001' name='ragul' mark='89'/>)

/*const mydata={
  sno:1,
  sname:'Ragul',
  address:'vallayalkaranpudur',
  bloodgroup:'O',
  ph:9847598575,
  nickname:'sori'
}
ReactDOM.createRoot(document.getElementById('root')).render(<Ragul data={mydata}></Ragul>);*/

/*const mydetails={
  sno:1,
  sname:'ragul',
  mark:{
    tamil:98,
    english:94,
    maths:81
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<Ragul data={mydetails}></Ragul>)*/


/*const myperdata={
  sno:1,
  sname:'Gokul',
  mark:93
}

ReactDOM.createRoot(document.getElementById('root')).render(<Ragul data={myperdata}></Ragul>)*/

ReactDOM.createRoot(document.getElementById('root')).render(<Ragul></Ragul>)

//ReactDOM.render(<Ragul name="gokul"/>,document.getElementById('root'));

/*var a=20;
var b=50;

var c=a>b? a : b;

ReactDOM.createRoot(document.getElementById('root')).render(c)*/

/*var a=342;
var b=534;
var c=343;
var d=(a>b && a>c) ? a: (b>c ? b:c);
ReactDOM.createRoot(document.getElementById('root')).render(d)*/

//========================JSX-> JAVASCRIPT XML====================

/*const myvar=<h1>This is jsx</h1>
ReactDOM.createRoot(document.getElementById('root')).render(myvar);*/

//==================  JSX expressions{} ========================
/*var n1=30;
var n2=10;
var ans=n1+n2;

var res=<h1>NO1:{n1}<br/>No2:{n2}<br/>Result:{ans}</h1>

ReactDOM.createRoot(document.getElementById('root')).render(res);*/

//===============JSX mutlple tags==============================

/*var res=(
  <>
  <h1>This is header 1</h1>
  <h2>This is header 2</h2>
  <h3>This is header 3</h3>
  </>
)
ReactDOM.createRoot(document.getElementById('root')).render(res);*/
//=====================using class name attribute==========================
//============did not use class(use className-->N-caps)



/*var res=<h1 className='myheader'>This is use of className attribute </h1>
ReactDOM.createRoot(document.getElementById('root')).render(res);*/

/*var res=<h1 id='myid'>This is use of Id attribute </h1>
ReactDOM.createRoot(document.getElementById('root')).render(res);*/

/*var res=(
<>
<h1 className='myhead'>This is use of className attribute </h1>
<h1 id='myid1'>This is id attribute</h1>
</>
)
ReactDOM.createRoot(document.getElementById('root')).render(res);*/






/*var k1=52;
var k2=65;
var k3=k1+k2;

const root = ReactDOM.createRoot(document.getElementById('root')).render(k3)*/

//const root = ReactDOM.createRoot(document.getElementById('root')).render(<h1>Helo</h1>)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
