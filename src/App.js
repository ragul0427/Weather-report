//formik and yup

//formik using to store handle the values using joy.......................
import { useFormik } from 'formik'
import BasicSchema from './joy';
import './App.css'

// const Basicform = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",===============with using asign variable
//       name: "",
//       number:"",
//     }
//   })
const onSubmit=()=>{
  console.log('submitted');
}

const Basicform = () => {                    //=================first create form
  const {values,handleBlur,handleChange,handleSubmit,errors,touched} = useFormik({
    initialValues: {                                       //storing the values in initial values
      email: "",//with using destructing========================
      name: "",
      number:"",                       
    },
    validationSchema:BasicSchema,                   //==============store the value from joy using validation schema.................
      onSubmit
  })

  console.log(errors);

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>

      {/* <label for="email">Enter Email here:</label>
      <input value={formik.values.email}
        id='email'
        type="email"
        placeholder='Enter Email here'  ///with using asign variables....................
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      /> */}


     <label htmlfor="email">Enter Email here:</label>
      <input value={values.email}
        id='email'
        type="email"
        placeholder='Enter Email here'  ///with using asign variables....................
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email?"colorchange":"" }   //======it is use for to show red border if there is error
      /> <br></br>
      {errors.email && touched.email && <p>{errors.email}</p> }     // it should be print error msg under the  box

     <label htmlfor="name">Enter Name here:</label>
      <input value={values.name}
        id='name'
        type="name"
        placeholder='Enter name here'  ///with using asign variables....................
        onChange={handleChange}
        onBlur={handleBlur}
      /> <br></br>
      {errors.name && touched.name && <p>{errors.name}</p> }

     <label htmlfor="number">Enter number here:</label>
      <input value={values.number}
        id='number'
        type="number"
        placeholder='Enter number here'  ///with using asign variables....................
        onChange={handleChange}
        onBlur={handleBlur}
      /> <br></br>
      {errors.number && touched.number && <p>{errors.number}</p> }
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Basicform


//joy form
       
       
 import * as yup from 'yup'

// const passwordRules=/^(?=.\d)(?=.[a-z])(?=.*[A-z]).{5,}$/;  //we can create a password rules like this

const BasicSchema=yup.object().shape({                    //========we create basicschema for storing to validationschema..it only show the error msg schema...
    email:yup.string().email().required(),
    name:yup.string().required(),
    number:yup.string().min(6).max(10).required()
})

export default BasicSchema








// import logo from './raha.jpg';
// import './App.css';
import Weatherreport from './weatherreport/weatherrep';
import  './weatherreport/weather.css';


function Ragul() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Weatherreport/>
    </div>
  )
}

export default Ragul;

/*function App()
{
  return <h1>Welcome to header 1</h1>
}

export default App;*/

/*function App()
{
  return(
    <>
    <h1>Welcome to header 1</h1>
    <h2>Welcome to header 2</h2>
    <h3>Welcome to header 3</h3>
    <h4>Welcome to header 4</h4>
    <h5>Welcome to header 5</h5>
    </>
  )
}
export default App;*/
//------how to add number use var const let-----
/*function App()
{
  var k1=40;
  var k2=30;
  return(
    <div>
      <h1>value of k1 and k2</h1>
      <h2>first value of k :{k1}</h2>
      <h2>Second value of k:{k2}</h2>
      <h2>Total value of  k:{k1+k2}</h2>
    </div>
  )
}
export default App*/
//---how to insert nested components
/*function TopView()
{
  return(
    <>
    <h1>The Top view</h1>
  </>
  )
}


function BottomView()
{
  return(
    <>
    <h1>The Bottom view</h1>
  </>
  )
}

function App()
{
  return(
    <>
    <TopView/>
    <BottomView/>
    </>
  )
}
export default App;*/

//--------------adding two components variables

/*import react from "react";
class App extends react.Component
{
  render(){
    return(
      <h2>Class components</h2>
    )
  }
}
export default App;*/

//--------------multi tag in class--------------------
/*import react from "react";
class App extends react.Component
{
  render(){
  var k1=30
  var k2=40;
  var k3;
  k3=k1+k2;

  return( 
    <>
    <h1>Class components 1:{k1}</h1>
    <h1>Class components 2:{k2}</h1>
    <h1>total             :{k3}</h1>
    </>
  )
}
}
export default App;*/

//--------------combine two class------------------

/*import react from "react";
class Test extends react.Component
{
  render(){
  return<h1>the base class</h1>
  }
}

class App extends Test
{
  render()
  {
    return(
      <>
      <Test/>
      <h1>The derive class</h1>
      </>
    )
  }
}
export default App;*/

//combine two class with variables-----------------

/*import react from "react";
class Test extends react.Component
{
  render(){
    var k1=70;
    var k2=30;
    var k3;
    k3=k1+k2;
  return(
  <>
  <h1>the base class:{k1}</h1>
  <h1>the base class:{k2}</h1>
  <h1>Total         :{k3}</h1>
  </>
  )
  }
}

class App extends Test
{
  render()
  {
    return(
      <>
      <Test/>
      <h1>The derive class</h1>
      </>
    )
  }
}
export default App;*/

/*import react from  "react";
class Ragul extends react.Component
{
render()
{
  return"<h1>welcome to react</h1>"
}
}
export default Ragul;*/


/*import react from "react";
class Ragul extends react.Component
{
render()
{
  function hari()
  {
    return"this is a normal function";
  }
  return(
    <>
    <h1>function demo</h1>
    <h1>{hari()}</h1>
    </>
  )
}
}
export default Ragul;*/


/*import react from "react";
class Ragul extends react.Component
{
render()
{
  function hari(a,b)
  {
    return"this is a function with arg or parameter.....>"+(a+b);
  }
  return(
    <>
    <h1>this is a function type 3 with argument</h1>
    <h1>{hari(11,25)}</h1>
    </>
  )
}
}
export default Ragul;*/

/*import react from "react";
class ragul extends react.Component
{
  render()
  {
  const show=()=>
  {
    return "this is a arrow function result";
  }
    return(
      <>
     <h1>This is arrow function</h1>
     <h1>answer:{show()}</h1>
     </>
    )
  }
}
  export default ragul;*/

  /*import react from "react";
  class ragul extends react.Component
  {
    render()
    {
      const show=(a,b,c)=>
      {
        return "this is arrow function with argument:  "+(a+b+c);
      }
      return(
        <>
        <h1>This is  a arrow function</h1>
        <h1>Answer:{show(11,34,45)}</h1>
        </>
      )
    }
  }
  export default ragul;*/

  /*import react from "react";
  class ragul extends react.Component
  {
    render()
    {
      const show=a=>
      {
        return "this is arrow function without para:"+(a*11);
      }
      return(
        <>
        <h1>this is arrow function without para</h1>
        <h1>Answer:{show(5)}</h1>
        </>
      )
    }
  }
export default ragul;*/

/*function Ragul()
{
  const myarr=[11,22,33,44,55,66,77,88];
  return(
    <>
    <h1>Array concept</h1>
    <h3>Array index:0---{myarr[0]}</h3>
    <h3>Array index:1---{myarr[1]}</h3>
    <h3>Array index:2---{myarr[2]}</h3>
    <h3>Array index:3---{myarr[3]}</h3>
    <h3>Array index:4---{myarr[4]}</h3>
    <h3>Array index:5---{myarr[5]}</h3>
    <h3>Array index:6---{myarr[6]}</h3>
    <h3>Array index:7---{myarr[7]}</h3>
    </>
  )
}
export default Ragul;*/

/*function ragul(){
  const myarr=[11,22,33,44,55,66,77];
  return(
    <>
    <h3>Array index : 0---&gt;{myarr[0]}</h3>
    <h3>Array index : 1---&gt;{myarr[1]}</h3>
    <h3>Array index : 2---&gt;{myarr[2]}</h3>
    <h3>Array index : 3---&gt;{myarr[3]}</h3>
    <h3>Array index : 4---&gt;{myarr[4]}</h3>
    <h3>Array index : 5---&gt;{myarr[5]}</h3>
    <h3>Array index : 6---&gt;{myarr[6]}</h3>
    </>
  )
}
export default ragul;*/

/*function ragul()
{
  const myarr=[11,22,33,44,55,66,77];
  var s=0;
  const sumfun=()=>{
    var len=myarr.length;
    //return "length of Array:"+len;
    for(var i=0;i<len;i++)
    {
      s=s+myarr[i];
    }
    return "sum of Array:" +s;
  }
  return(
    <>
    <h1>Sum of array</h1>
    <h3>sum of array=====&gt;  {sumfun()}</h3>
    </>
  )
}
export default ragul;*/

/*function Ragul()
{
  const myarr=[11,22,33,44,55,66];
  return(
    <>
    <h1>display the array values:</h1>
    <h2>{myarr.map(v=>v+"    ")}</h2>
    <hr></hr>
    {myarr.map((item)=><h3>{(item)}</h3>)}
    </>
  )
}
export default Ragul;*/

/*function Ragul()
{
  const myarr=[11,22,33,44,55,66,77,88];
  var max=myarr[0];
  const sumfun=()=>{
    for(var i=1;i<myarr.length;i++)
		{
			if(myarr[i]>max)
			max=myarr[i];
		}
    return "maximum number in array:"+max;
  }
    return(
      <>
      <h1>maximum number in array</h1>
      <h2>max no in arr:{sumfun()}</h2></>
    )
  }
  export default Ragul;*/

  //---------------------------destructing arrays

  /*function Ragul()
  {
    const myarr=[11,12,55,66,77];
    var [v1,v2,,,v3]=myarr;

    return(
      <>
      <h3>{v1}</h3>
      <h3>{v2}</h3>
      <h3>{v3}</h3>
      </>
    )
  }

  export default Ragul;*/

  //----------destructing array using function return
  /*function Ragul()
  {
    const myfun=(a,b)=>
    {
     const addition=a+b;
     const subtraction=a-b;
     const multiplication=a*b;
     const div=a/b;
     return [addition,subtraction,multiplication,div]

    }
    const [add,sub,mult,div]=myfun(11,25);

    return(
      <>
      <h2>addition:{add}</h2>
      <h2>subtraction:{sub}</h2>
      <h2>multiplication:{mult}</h2>
      <h2>division:{div}</h2>
      </>
    )
  }
export default Ragul;*/

//---------------destruction object
/*function Ragul()
{
  const mydetails={
    rno:1001,
    sname:"Ragul",
    tamil:45,
    english:87,
    maths:80
  }
  const myfun=({rno,sname,tamil,english,maths})=>
  {
    return [rno,sname,tamil,english,maths]
  }

  const [r,s,t,e,m]=myfun(mydetails);

  return(
    <>
    <h2>roll no:{r}</h2>
    <h2>student name:{s}</h2>
    <h2>tamil:{t}</h2>
    <h2>english:{e}</h2>
    <h2>maths:{m}</h2>
    </>
  )
}

export default Ragul;*/

//----------------------------destructing nested object------------------
/*function Ragul()
{
  const mydetails={
    rno:1001,
    sname:"Ragul",
    mark:{tamil:45,
    english:87,
    maths:80}
  }
  const myfun=({rno,sname,mark:{tamil},mark:{english},mark:{maths}})=>
  {
    return [rno,sname,tamil,english,maths]
  }

  const [r,s,t,e,m]=myfun(mydetails);

  return(
    <>
     <h2>roll no:{r}</h2>
    <h2>student name:{s}</h2>
    <h2>tamil:{t}</h2>
    <h2>english:{e}</h2>
    <h2>maths:{m}</h2>
    </>
  )
  }
export default Ragul;*/

//Another method of nested object
/*function Ragul()
{
const mydetails={
  rno:1001,
  sname:"Ragul",
  mark:{tamil:45,
  english:87,
  maths:80}
}

  const myfun=({rno,sname,mark})=>

{
  return [rno,sname,mark.tamil,mark.english,mark.maths]
}

const [r,s,t,e,m]=myfun(mydetails);

return(
  <>
   <h2>roll no:{r}</h2>
  <h2>student name:{s}</h2>
  <h2>tamil:{t}</h2>
  <h2>english:{e}</h2>
  <h2>maths:{m}</h2>
  </>
)
}
export default Ragul;*/

//------------------------------spread operator in array(basic)------------

/*function Ragul()
{
  const arr1=[11,22,33,44,55,66,77];
  const arr2=[88,99,110,120,130];

  const comarr=[...arr1,...arr2]

  return(
    <>
    <h1>array 1:{arr1}</h1>
    <h1>array 2:{arr2}</h1>
    <h1>Combine array:{comarr}</h1>
    </>
  )
}

export default Ragul;*/

//--------------spread operator with destructive array----------

/*function Ragul()
{
  const myarr=[11,22,33,44,55,66,77,88];

  const [a1,a2,...a3]=myarr

  return(
    <>
    <h1>array1:{a1}</h1>
    <h1>array2:{a2}</h1>
    <h1>array3:{a3}</h1>
    </>
  )
}
export default Ragul;*/

//--------spread operator using with object-------------
/*function Ragul()
{
  const obj1={
    rno:1001,
    name:'raja',
    mark:87
  }
  const obj2={
    rno:1002,
    name:'raja',
    mark:98
  }

  const comobj={...obj1,...obj2};

  return(
    <>
    <h1>object 1:{obj1.rno} {obj1.name} {obj1.mark}</h1>
    <h1>object 1:{obj2.rno} {obj2.name} {obj2.mark}</h1>
    <h1>combine object:{comobj.rno} {comobj.name} {comobj.mark}</h1>
    </>
  )
}
export default Ragul;
//------------------------modules (use global variables)-------------
//global variables.we can access anywhere in the project------------------------
//-------step 1-module create (modfile.js-->src-->right click-->new file)
/*import {myrno,myname,mymark} from "./modfile";

function Ragul()
{
  return(
    <>
    <h1>file from modfile:</h1>
    <h1>my roll no:{myrno}</h1>
    <h1>my name:{myname}</h1>
    <h1>my mar:{mymark}</h1>
    //</>
  )
}
export default Ragul;*/


//----------------package-->collection of modules

/*import { myno,name,mark } from "./mymodules/file1"
import Funcomponent from "./mymodules/file2"

function Ragul()
{
  return(
    <>
    <h1>file1 from package:</h1>
   <h1>Roll no:{myno}</h1>
   <h1>My name:{name}</h1>
   <h1>My Mark:{mark}</h1>
    <hr></hr>
    <h1>file2 from package:</h1>
    <Funcomponent/>
    </>
  )
}
export default Ragul;*/

/*import Funcomponent from "./mymodules/file3";
import Classcomp from "./mymodules/file4";

function Ragul(){

  let islogin=false;

  let result=islogin ? <Funcomponent/> : <Classcomp/>;
  
  return(
    <>
    {result}
    </>
  )
}

export default Ragul;*/

/*function Ragul()
{
var a=20;
var b=50;

var c=a>b? a : b;

return(
  <h1>biggest number:{c}</h1>
)
}

export default Ragul;*/


/*function Ragul()
{
var a=342;
var b=534;
var c=343;
var d=(a>b && a>c) ? a: (b>c ? b:c);


return(
  <h1>biggest number:{d}</h1>
)
}

export default Ragul*/

/*function Ragul(){
  var res='fail';
  var mark=20;

  if(mark>35)
  {
    res='pass';
  }
  return(
    <>
    <h1>Result</h1>
    <h3>{res}</h3>
    </>
  )
}
export default Ragul;*/

/*function Ragul(props){
  return(
    <>
    <h1>My mark:{props.mark}</h1>
    </>
  )
}

export default Ragul;*/

//-------pass multiple arguments or parameters

/*function Ragul(props){
  return(
    <>
    <h1>My mark:{props.rollno}</h1>
    <h1>My mark:{props.name}</h1>
    <h1>My mark:{props.mark}</h1>
    </>
  )
}

export default Ragul;*/

//---------using class components---------------

/*import React from "react";
class Ragul extends React.Component
{
  constructor(props)
    {
      super(props)
    }
  render()
  {
    return(
      <>
      <h1>My mark:{this.props.rollno}</h1>
    <h1>My mark:{this.props.name}</h1>
    <h1>My mark:{this.props.mark}</h1>
      </>
    )
  }
}
export default Ragul;*/

/*function Ragul(props){
  return(
    <>
    <h1>Serial no:{props.data.sno}</h1>
    <h1>Name:{props.data.sname}</h1>
    <h1>Address:{props.data.address}</h1>
    <h1> Phone no:{props.data.ph}</h1>
    <h1>bloodgroup:{props.data.bloodgroup}</h1>
    <h1>Nickname:{props.data.nickname}</h1>
    </>
  )
}

export default Ragul;*/

/*import React from "react";
class Ragul extends React.Component
{
  constructor(props)
    {
      super(props)
    }
  render()
  {
    return(
      <>
    <h1>serial no:{this.props.data.sno}</h1>
    <h1>name:{this.props.data.sname}</h1>
    <h1>address:{this.props.data.address}</h1>
    <h1>phone number:{this.props.data.ph}</h1>
    <h1>bloodgroup:{this.props.data.bloodgroup}</h1>
    <h1>nickname:{this.props.data.nickname}</h1>
      </>
    )
  }
}
export default Ragul;*/

//------------------------------nested object using props
/*import React from "react";
class Ragul extends React.Component
{
  constructor(props)
    {
      super(props)
    }
  render()
  {
    return(
      <>
    <h1>serial no:{this.props.data.sno}</h1>
    <h1>name:{this.props.data.sname}</h1>
    <h1>Tamil:{this.props.data.mark.tamil}</h1>
    <h1>english:{this.props.data.mark.english}</h1>
    <h1>Maths:{this.props.data.mark.maths}</h1>
      </>
    )
  }
}
export default Ragul;*/

//state object using class----------------------------------
//=------------------it can using only class

/*import React from "react";
class Ragul extends React.Component
{
  constructor(props)
    {
      super(props)
      this.state={
        sno:'1',
        sname:'ragul',
        mark:{
          tamil:93,
          english:92,
          maths:46
        }
      }
    }
    
  render()
  {
    return(
      <>
    <h1>serial no:{this.state.sno}</h1>
    <h1>name:{this.state.sname}</h1>
    <h1>Tamil:{this.state.mark.tamil}</h1>
    <h1>english:{this.state.mark.english}</h1>
    <h1>Maths:{this.state.mark.maths}</h1>
      </>
    )
  }
}
  export default Ragul;*/

  //---------------------react changestate using button

 /* import React from "react";
class Ragul extends React.Component
{
  constructor(props)
    {
      super(props)
      this.state={
        sno:'1',
        sname:'ragul',
        mark:10
      }
    }
    
  render()
  {
    const changeMark=()=>{
      this.setState({mark:100})
    }
    return(
      <>
    <h1>serial no:{this.state.sno}</h1>
    <h1>name:{this.state.sname}</h1>
    <h1>mark:{this.state.mark}</h1>
    <button onClick={changeMark}>ClickMe to change mark</button>
      </>
    )
  }
}
  export default Ragul;*/

//-----------39.Life cycle of react components

//3.types=======1.mounting   2.updating   3.unmounting
//1.mounting==============1.constructor    2.getdrivedstatefromprops(removed)     3.componenrDidMount
  /*import React from "react";
  class Ragul extends React.Component
  {
    constructor(props)
      {
        super(props)
        this.state={
          sno:'1',
          sname:'ragul',
          mark:100
        }
      }

      componentDidMount(){
       setTimeout(()=>{
       this.setState({mark:0})
       },1000)
      }
      
    render()
    {

      return(
        <>
      <h1>serial no:{this.state.sno}</h1>
      <h1>name:{this.state.sname}</h1>
      <h1>mark:{this.state.mark}</h1>
        </>
      )
    }
  }
    export default Ragul;*/

//40 using componendidmount in one line...........................................
    /*import React from "react";
  class Ragul extends React.Component
  {
    constructor(props)
      {
        super(props)
        this.state={
          sno:'1',
          sname:'gokul',
          mark:100
        }
      }

      componentDidMount(){
       setTimeout(()=>{this.setState({mark:45,sname:'ragul'})},5000)}
      
    render()
    {

      return(
        <>
      <h1>serial no:{this.state.sno}</h1>
      <h1>name:{this.state.sname}</h1>
      <h1>mark:{this.state.mark}</h1>
        </>
      )
    }
  }
    export default Ragul;*/


    //---------------------------------------------------41.change value using button

  /*import React from "react";
  class Ragul extends React.Component
  {
    constructor(props)
      {
        super(props)
        this.state={
          sno:'1',
          sname:this.props.name,
          mark:100
        }
      }

      componentDidMount(){
        setTimeout(()=>{this.setState({mark:45,sname:'ragul'})},5000)}


      
    render()
    {
      const myfunction=()=>{
        const cm=parseInt(document.getElementById('t1').value);
        const cn=document.getElementById('t2').value;
        this.setState({mark:cm,sname:cn})
      }

      return(
        <>
      <h1>serial no:{this.state.sno}</h1>
      <h1>name:{this.state.sname}</h1>
      <h1>mark:{this.state.mark}</h1>
      Change Name:<input type="text" id="t2"></input><br></br>
      Change mark:<input type="text" id="t1" placeholder="Enter Your mark here"></input><br></br>
      <button onClick={myfunction}>Change value</button>
        </>
      )
    }
  }
    export default Ragul*/


    //42.---------------------using shouldcomponentupdate

   /* import React from "react";
  class Ragul extends React.Component
  {
    constructor(props)
      {
        super(props)
        this.state={
          sno:'1',
          sname:'gokul',
          mark:100
        }
      }

      shouldComponentUpdate(){
        return false;//---------------give true the value will change in componentdid amount,,otherwise the value no change
      }

      componentDidMount(){
       setTimeout(()=>{this.setState({mark:45,sname:'ragul'})},5000)}
       
      
    render()
    {

      return(
        <>
      <h1>serial no:{this.state.sno}</h1>
      <h1>name:{this.state.sname}</h1>
      <h1>mark:{this.state.mark}</h1>
        </>
      )
    }
  }
    export default Ragul;*/


    //43.componentDidUpdate
  /*import React from "react";
  class Ragul extends React.Component
  {
    constructor(props)
      {
        super(props)
        this.state={
          sno:'1',
          sname:'gokul',
          mark:100
        }
      }

      shouldComponentUpdate(){
        return true;//---------------give true the value will change in componentdidmount,,otherwise the value no change
      }

    
      componentDidUpdate(){
        document.getElementById('ans').innerHTML="after update:"+this.state.mark;
      }
      componentDidMount(){
       setTimeout(()=>{this.setState({mark:45,sname:'ragul'})},5000)}
       
      
    render()
    {

      return(
        <>
      <h1>serial no:{this.state.sno}</h1>
      <h1>name:{this.state.sname}</h1>
      <h1>mark:{this.state.mark}</h1>
      <div id="ans"></div>
        </>
      )
    }
  }
    export default Ragul;*/

//----------------snapshotbeforeup
    /*import React from "react";
    class Ragul extends React.Component
    {
      constructor(props)
        {
          super(props)
          this.state={
            sno:'1',
            sname:'gokul',
            mark:100
          }
        }
  
        shouldComponentUpdate(){
          return true;//---------------give true the value will change in componentdid amount,,otherwise the value no change
        }
  
  
        componentDidUpdate(){
          document.getElementById('amark').innerHTML="after update:"+this.state.mark;
          document.getElementById('aname').innerHTML="after update:"+this.state.sname;
        }
        getSnapshotBeforeUpdate(prevProps,prevState){
          document.getElementById("bmark").innerHTML="before update:"+prevState.mark;
          document.getElementById("bname").innerHTML="before update:"+prevState.sname;
        }
        componentDidMount(){
         setTimeout(()=>{this.setState({mark:45,sname:'ragul'})},5000)}
         
        
      render()
      {
  
        return(
          <>
        <h1>serial no:{this.state.sno}</h1>
        <h1>name:{this.state.sname}</h1>
        <h1>mark:{this.state.mark}</h1>
        <div id="amark"></div>
        <div id="aname"></div>
        <div id="bmark"></div>
        <div id="bname"></div>
          </>
        )
      }
    }
      export default Ragul;*/
  
      //----------------snapshotbeforeupdate using props

    /*import React from "react";
    class Ragul extends React.Component
    {
      constructor(props)
        {
          super(props)
         
        }
  
        shouldComponentUpdate(){
          return true;//---------------give true the value will change in componentdid amount,,otherwise the value no change
        }
  
  
        componentDidUpdate(){
          document.getElementById('amark').innerHTML="after update:"+this.state.mark;
          document.getElementById('aname').innerHTML="after update:"+this.state.sname;
        }
        getSnapshotBeforeUpdate(prevProps,prevState){
          document.getElementById("bmark").innerHTML="before update:"+prevProps.mark;
          document.getElementById("bname").innerHTML="before update:"+prevProps.sname;
        }
        componentDidMount(){
         setTimeout(()=>{this.setState({mark:45,sname:'ragul'})},5000)}
         
        
      render()
      {
  
        return(
          <>
        <h1>serial no:{this.props.data.sno}</h1>
        <h1>name:{this.props.data.sname}</h1>
        <h1>mark:{this.props.data.mark}</h1>
        <div id="amark"></div>
        <div id="aname"></div>
        <div id="bmark"></div>
        <div id="bname"></div>
          </>
        )
      }
    }
      export default Ragul;*/

      //3.unmounting-----------------------------------------
      //---componentWillUnmount ----------------------->remove or delete value

    /*import React from "react";
    class Child extends React.Component
    {

      componentWillUnmount(){
        alert('component removed')
      }
     render()
     {
      return(
        <>
        <h1>This is child class</h1>
        <h1>This is child class</h1>
        <h1>This is child class</h1>
        <h1>This is child class</h1>
        </>
      )

     }
    }

    class Ragul extends Child
    {
      constructor(props)
      {
        super(props)
        this.state={
          show:true
        }
      }

      render(){

        let delcomponent=()=>{
         this.setState({show:false})
        }

        let mycomponent;

        if(this.state.show===true)
        {
          mycomponent=<Child/> 
        }

        return(
          <>
          {mycomponent}
          <h1>This is app method</h1>
          <button onClick={delcomponent}>Remove component</button>
          </>
        )
      }
    }

    export default Ragul*/

    //-------Events--->onclick onsubmit onblur onload
    //events basic

    /*function Ragul()
    {
      const show=()=>{
        alert('Button Clicked')
      }
      return(
        <>
        <h1>This is event method</h1>
        <button onClick={show}>ClickMe</button>
        </>
      )
    }

    export default Ragul;*/


    //----events with arguments

    /*function Ragul()
    {
      const show=(s,m)=>{
        alert('Button Clicked:'+s)
        document.getElementById('res').innerHTML="Button clicked: <br> Name:"+s+"<br> Mark:"+m;
      }
      return(
        <>
        <h1>This is event method</h1>
        <button onClick={()=>show('Ragul',99)}>ClickMe</button>
        <div id="res"></div>
        </>
      )
    }
    export default Ragul;*/

    //----React Event types --------------------------------
    /*function Ragul()
    {
      const show=(s,m,e)=>{
        alert('Button Clicked:'+e.type)
        document.getElementById('res').innerHTML="Button clicked: <br> Name:"+s+"<br> Mark:"+m;
      }

      const dis=(e)=>{
        alert("button text change:"+e.type);
      }

      const dis1=(e)=>{
        alert("button text Focus:"+e.type);
      }

      const dis2=(e)=>{
        alert("button Blur:"+e.type);
        document.getElementById('t1').value="Cursor inside"+e.type;
      }
      return(
        <>
        <h1>This is event method</h1>
        <input id="t1" type="text" onBlur={(event)=>dis2(event)}></input><br></br>
        <input type="text" onChange={(event)=>dis(event)}></input><br></br>
        <input type="text" onFocus={(event)=>dis1(event)}></input><br></br>
        <button onClick={(event)=>show('Ragul',99,event)}>ClickMe</button>
        <div id="res"></div>
        </>
      )
    }
    export default Ragul;*/

    //---React events

   /* function Ragul()
{
  const myfun=()=>
  {
    var a =document.getElementById("t1").value;
    document.getElementById("ans").innerHTML=a;
  }

  const dis1=()=>{
    document.getElementById("ans1").innerHTML="cursor to move outside to textbox" 
   }

   const dis2=()=>{
    document.getElementById("ans1").innerHTML="cursor to move inside  textbox" 
}
let mydata=""
const dis3=()=>
  {
     mydata=document.getElementById("t1").value;
    document.getElementById("ans1").innerHTML="you typing....."+mydata;
  }

  const overfun=()=>
  {
    document.getElementById("b1").style.backgroundColor='green';
  }

  const outfun=()=>{
    document.getElementById("b1").style.backgroundColor="white";
  }

  return(
    <>
    Enter your text:<input type="text" onChange={dis3} onFocus={dis2} onBlur={dis1} id="t1"></input>
    <buttton id="b1" onClick={()=>myfun()}onMouseOut={outfun} onMouseOver={overfun}>ClickMe</buttton>
    <div id="ans"></div>
    <div id="ans1"></div>
    </>
  )
  }
  export default Ragul;*/


  //--------react looping

  //map method is used to achieve loop===================================
  /*function Ragul()
  {
    const myarr=["ragul","hari", "amar","ram","aravinth","guna"]
  

  return(
    <>
    
 {/*<h1>{myarr[0]}</h1>
  <h1>{myarr[1]}</h1>
  <h1>{myarr[2]}</h1>*///}

    //{myarr.map((v)=><h2>{(v)}</h2>)}
   // </>
 /// )
  //}

//export default Ragul;*/
/*function Myfun(props)
{
  return <li>{props.name}</li>
}

function Ragul()
  {
    const myarr=["ragul","hari", "amar","ram","aravinth","guna"]
  

  return(
    <>
    
 {/*<h1>{myarr[0]}</h1>
  <h1>{myarr[1]}</h1>
  <h1>{myarr[2]}</h1>*///}

    //{/*{myarr.map((v)=><h2>{(v)}</h2>)}*/}

    /*<ol type="I">
      {myarr.map((data)=><Myfun name={data}></Myfun>)}
  </ol>
    </>
  //)
  //}

  export default Ragul;*/

  //---------------------react event types

  /*function Ragul(){
  
  let myfun=(v)=>
  {
    document.getElementById("ans").innerHTML=v.type;
  }

   myfun=(v)=>
  {
    document.getElementById("ans").innerHTML=v.type;
  }

  const dis=(h)=>
  {
    document.getElementById("ans1").innerHTML=h.target.value;
  }

    return(
      <>
      <button id="b1" onClick={(event)=>myfun(event)}>ClickMe</button>
      <button id="b1" onMouseOver={(event)=>myfun(event)}>ClickMe</button>
      <input type="text" id="t1" onFocus={(event)=>dis(event)} placeholder="Enter sentence here"></input>this line we can  use any events in react
      <div id="ans"></div>
      <div id="ans1"></div>
      </>
    )
  }

  export default Ragul;*/

  //React forms

  /*function Ragul()
  {
    return(
      <form>
        <label>Enter User Name Here:
        </label>                               we click this label==>the cursor does not enter into text box
        <input type="text"></input>

        <label>
          Enter User Name Here:                   we click this label==>the cursor enter into text box
          <input type="text"></input>
        </label>
      </form>
    )
  }
export default Ragul*/

//React form +React hooks

//const [var1, var2]-----var1===default value,it can set name with useState function... var 2===>it can change the default value of var1 using onChange functions..setName get the textbox value to change default value---

/*import { useState } from 'react'
function Ragul()
{

  const [name,setName]=useState("Ragul");
  const [mark,setMark]=useState(99);
  return(
    <form>
      <label>Enter user here:
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name}></input>
      </label>

      <label>Enter mark here:
      <input type="text" onChange={(e)=>setMark(e.target.value)} value={mark}></input>
      </label>
    </form>
  )
}

export default Ragul*/

//react forms+hook+submit btn=onsubmit btn

/*import { useState } from 'react'
function Ragul()
{

  const [name,setName]=useState("Ragul");
  const [mark,setMark]=useState(99);

  const myfun=(event)=>
  {
    event.preventDefault();
    alert("submit button pressed:"+name+" "+mark)
  }
  return(
    <form onSubmit={myfun}>
      <label>Enter user here:
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name}></input>
      </label>

      <label>Enter mark here:
      <input type="text" onChange={(e)=>setMark(e.target.value)} value={mark}></input>
      </label>

      <input type="submit"></input>
    </form>
  )
}

export default Ragul*/

//React hooks (textarea) + react forms

/*import { useState } from 'react'
function Ragul()
{
  const [address,setAddress]=useState("default address \n Second Line \n Third Line")

  const changeAddress=(event)=>
  {
    event.preventDefault();
    alert(address)
  }


  return(
    <form  method='post' action='https://www.google.com' target='_blank'>
      <h1>Text area</h1>
      <label>Enter Your feedback:</label>
      <textarea rows='10' cols='30' onChange={(e)=>{setAddress(e.target.value)}} value={address}></textarea>
      <input type="button" onClick={changeAddress} value="clickMe"></input>
      <button onClick={changeAddress}>button</button>
      <input type="submit" onClick={changeAddress} value="submit"></input>
      <input type="submit"  value="submit button" ></input>
    </form>
  )
}

export default Ragul;*/

/*import { useState } from 'react'
function Ragul()
{
  const [address,setAddress]=useState("namakal")

  const changeAddress=(event)=>
  {
    setAddress(event.target.value)
  }

  const myfun=(event)=>{
    event.preventDefault();
    alert(address)
  }
  return(
    <form>
     <select onChange={changeAddress} value={address}>
      <option value="covai">covai</option>
      <option value="trichy">trichy</option>
      <option value="karur">karur</option>
      <option value="namakal">namakal</option>
      <option value="erode">erode</option>
     </select>
     <input type="button" value="submit" onClick={myfun}></input>
    </form>
  )
}

export default Ragul;*/

//React forms(radio buttons)
/*import { useState } from 'react'
function Ragul()
{
  //const [gender,setGender]=useState("Male");

  /*const changeGender=(event)=>{
    event.preventDefault();
    alert(gender);
  }*/

  /*const show=(event)=>
  {
    document.getElementById("res").innerHTML=event.target.value;
  }

  return(
    <form>
      <h1>Choose Gender</h1>
      <div>
        <input type="radio" value="Male" name="gender" onClick={(event)=>show(event)}/> Male
        <input type="radio" value="Female" name="gender" onClick={(event)=>show(event)}/> Female
        <input type="radio" value="Other" name="gender" onClick={(event)=>show(event)}/> Other<br></br>
        selected Gender:
       <div id='res'>
       </div>
        
      </div>
    </form>
  )
} 
export default Ragul;*/



/*import { useState } from 'react'
function Ragul()
{
const [ischecked,setChecked]=useState(true)

const show=(event)=>
{ 
document.getElementById("res").innerHTML=event.target.value
}

  return(
    <form>
      <input type="checkbox" checked={ischecked} onChange={e => setChecked(e.target.checked)}/>C
      <input type="checkbox" value="java" onChange={(event)=>show(event)}/>Java
      <input type="checkbox" value="python" onChange={(event)=>show(event)}/>python
      <input type="checkbox" value="html" onChange={(event)=>show(event)}/>HTML
      <input type="checkbox" value="css" onChange={(event)=>show(event)}/>CSS
      <input type="checkbox" value="javascript" onChange={(event)=>show(event)}/>Javascript<br></br>
      selected Box:
      <div id='res'></div>
    </form>
  )

}
export default Ragul;*/

/*function Ragul()
{
  const select=(event)=>
  {
    //alert(event.type)
    //console.log("event type:"+event.type)
    //console.log("checked/unchecked:"+event.target.checked)
    /*var ans=event.target.checked
    if(ans===true)
    {
      document.getElementById("c1").checked=false;
      document.getElementById("c2").checked=false;
      document.getElementById("c3").checked=false;
    }
  
    if( document.getElementById("c4").checked===true)
    {
      document.getElementById("c1").checked=false;
      document.getElementById("c2").checked=false;
      document.getElementById("c3").checked=false;
    }
  }

  
  const dis=(event)=>
    {
      event.preventDefault();
    var ans=""
    if(document.getElementById('c1').checked===true)
    ans='C'
    if(document.getElementById('c2').checked===true)
    ans=ans+'Java'
    if(document.getElementById('c3').checked===true)
    ans=ans+'Python'
    if(document.getElementById('c4').checked===true)
    ans=ans+'None of these'
    console.log(ans)
  }

  return(
    <form onSubmit={(event)=>dis(event)}>
      <input type="checkbox" value="C" id="c1" onChange={(event)=>select(event)}/>C
      <input type="checkbox" value="Java" id="c2" onChange={(event)=>select(event)}/>Java
      <input type="checkbox" value="C" id="c3" onChange={(event)=>select(event)}/>Python
      <input type="checkbox" value="None of these" onChange={(event)=>select(event)} id="c4"/>None of these

      <input type='submit' value="ShowData"></input>
      <div id="res"></div>
    </form>
  )
}
export default Ragul;*/

/*function Ragul()
{
  
const handleChange = (e) => {
  let options  = e.target;
  options = Array.apply(null,options)
  console.log(options)
  let selectedValues=options.filter(x => x.selected).map(x => x.value); 
  document.getElementById('res').innerHTML=selectedValues;
}

  return(
   <form>
    <select size='10' multiple onChange={handleChange}> 
      <option>January</option>
      <option>february</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option> 
      </select>
      <br></br>
       Selected Months:
       <div id='res'></div>
    </form>
  )
}


export default Ragul;*/


/*import React, { useState } from 'react';
function Ragul() {
 
  const [selectedList, setSelectedList] = useState([]);
 
  const handleChange = e => {
    let { options }  = e.target;
    options = Array.apply(null,options)
    //console.log(options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    setSelectedList(selectedValues);
    console.log(selectedValues)
  }
  return (
    <div className="App">
      <h3>React multiselect listbox component - <a href="https://cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
      <select
       multiple 
       name="list-box" 
       size='10' 
       onChange={handleChange}>
        <option value="January">January</option>
        <option value="february">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <br /><br />
      <b>Output:</b>
     <pre>{JSON.stringify(selectedList)}</pre>
    </div>
  );
}
 
export default Ragul;*/


//react forms

/*import { useForm } from 'react-hook-form'

function Ragul()
{

  const {register,handleSubmit}=useForm()

  const myfun=(data)=>
  {
    //alert(data.name+" "+data.pwd+" "+data.no+" "+data.adrs);

    document.getElementById('res').innerHTML=data.name;
    document.getElementById('res1').innerHTML=data.pwd;
    document.getElementById('res2').innerHTML=data.no;
    document.getElementById('res3').innerHTML=data.adrs;
    document.getElementById('res4').innerHTML=data.gen;

    var course=""
    if(data.course1!==false)
    course='c'
    if(data.course2!==false)
    course=course+'c++'
    if(data.course3!==false)
    course=course+'Java'
    document.getElementById('res5').innerHTML=course;
    document.getElementById('res5').innerHTML=data.city;
  }

  return(
    <form onSubmit={handleSubmit(myfun)}>
      <label>Enter user name:</label>
      <input type='text' name='name' {...register('name')}></input><br></br>
      <label>Enter user password:</label>
      <input type='password' name='pwd' {...register('pwd')}></input><br></br>
      <label>Enter user number:</label>
      <input type='text' name='no' {...register('no')}></input><br></br>
      <label>Enter user number:</label>
      <textarea rows='10' cols='30' {...register('adrs')}></textarea><br></br>
      <br></br>
      <input type='radio' value='male' name='gen' {...register('gen')}/>Male
      <input type='radio' value='female' name='gen' {...register('gen')}/>Female
      <input type='radio' value='others' name='gen' {...register('gen')}/>others
      <br></br>
      <input type='checkbox' value='c' name='course1' {...register('course1')}/>C
      <input type='checkbox' value='c++' name='course2' {...register('course2')}/>C++
      <input type='checkbox' value='java' name='course3' {...register('course3')}/>Java
      <br></br>
      <select name='city' {...register('city')}>
        <option value='karur'>karur</option>
        <option value='chennai'>chennai</option>
        <option value='madurai'>madurai</option>
      </select>
      <input type='submit' value='submit'></input>
      <div id='res'></div>
      <div id='res1'></div>
      <div id='res2'></div>
      <div id='res3'></div>
      <div id='res4'></div>
      <div id='res5'></div>
      <div id='res6'></div>
    </form>
  )
}

export default Ragul;*/


//useEffect

/*import { useState,useEffect } from 'react'

function Ragul()
{
  const [name,setName]=useState("Gokul")
   useEffect(()=>{
    document.title=`Hello ${name}`
  })
return(
  <>
  <h1>Hello! {name}</h1>
  <input type='button' value='Clickme' onClick={()=>{setName('ragul')}}/>
  </>
)
}
 export default Ragul*/

 
 /*import axios from 'axios'
 import { useState,useEffect } from 'react'

 function Ragul()
 {
  const [post,setPost]=useState(null)
  const baseURL="http://time.jsontest.com"
  useEffect(()=>{
    axios.get(baseURL).then((response)=>{
    setPost(response.data)
  });
  })

  if(!post) return <h2>Invalid API</h2>
  return(
    <>
    <h1>Test axios</h1>
    <h1>{post.date}</h1>
    <h1>{post.time}</h1>
    </>
  )
 }
  export default Ragul;*/


 /*import axios from 'axios'
 import { useState,useEffect } from 'react'

 function Ragul()
 {
  const [post,setPost]=useState(null)
  const baseURL="https://api.openweathermap.org/data/2.5/weather?q=karur&appid=de2ce82f7489dbceb4a6ced0106966e5"
  useEffect(()=>{
    axios.post(baseURL).then((response)=>{
    setPost(response.data)
  }).catch((error)=>{
    if(error.response)
    console.log(error.response.data)
  })
  })

  if(!post) return <h2>Invalid API</h2>
  return(
    <>
    <h1>Test axios</h1>
    <h1>{post.name}</h1>
    <h1>{post.weather[0].main}</h1>
    <h1>{post.weather[0].description}</h1>
    </>
  )
 }
  export default Ragul;*/

  //using form without using effect
/*import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

 function Ragul()
 {
  const [post,setPost]=useState()
  const {register,handleSubmit}=useForm()

  const getWeather=(data)=>
  {
    var cityName=document.getElementById('t1').innerHTML=data.city;
    var baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=de2ce82f7489dbceb4a6ced0106966e5`
    axios.post(baseURL).then((response)=>{
      setPost(response.data)
    }).catch((error)=>{
      if(error.response)
      setPost(error.response.data)
    })
     
    if(post.cod===200)
    {
      document.getElementById("name").innerHTML="City Name:"+post.name;
      document.getElementById("weather").innerHTML="Weather status:"+post.weather[0].main;
      document.getElementById("description").innerHTML="Description:"+post.weather[0].description;
      document.getElementById("temp").innerHTML="Temperature:"+post.main.temp;
      document.getElementById("sunrise").innerHTML="Sunrise:"+post.sys.sunrise;
      document.getElementById("sunset").innerHTML="Sunset:"+post.sys.sunset;
    
      const images=document.querySelectorAll("img");

      images.forEach((image)=>{
        image.classList.add('active')
      
    });
  }else if(post.cod==='404')
  {
        
    document.getElementById("notfound").innerHTML=post.message;
  }
  }  

  return(
    <div className='box'>
      <div className='innerbox'>
        <div className='header'>
    <span>
      <img src={require('./weather/rainy1.jfif')} alt='cant found' className='active'/>
      <h1>Weather Report </h1>
      <img src={require('./weather/sun2.png')} alt='cant found' className='active'/>
      </span>
      </div>
    <div className='form_controller'>
    <form onSubmit={handleSubmit(getWeather)}>
      <input type="text" name='city' id='t1' placeholder='Enter City Name here' {...register('city')}/><br></br>
      <input type='submit' className='btn' value='Weather Report'/>
    </form>
    </div>
    <div className='id-results'> 
   <div id='box'>
    <div id='name'></div>
    <div id='notfound'></div>
      <img src={require('./weather/city.jpg')} alt='cant find'/>
      </div>
      <div id='box'>
      <div id='weather'></div>
        <img src={require('./weather/weather.png')} alt='cant find'/>
        </div>
        <div id='box'>
        <div id='description'></div>
          <img src={require('./weather/climate.png')} alt='cant find'/>
        </div>

        <div id='box'>
          <div id='temp'></div>
          <img src={require('./weather/temp.png')} alt='cant find' id='img2'/>
        </div>

          <div id='box'>
          <div id='sunrise'></div>
            <img src={require('./weather/sunrise.jfif')} alt='cant find'/>
          </div>

          <div id='box'>
          <div id='sunset'></div>
            <img src={require('./weather/sunset.jfif')} alt='cant find'/>
          </div>
    </div>
    <span><p>All rights reserved&copy; 2023</p></span>
    </div>
    </div>
  )
 }
  export default Ragul*/

 
// using useeffect only========================
//project
  // import axios from'axios'
  // import { useState,useEffect } from 'react'
//   function Ragul()
//   {
  
//     const [post,setPost]=useState("null")
//     const baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${post}&appid=de2ce82f7489dbceb4a6ced0106966e5`

//   useEffect(()=>{
//     axios.post(baseURL).then((response)=>{
//     setPost(response.data);
//   })
// })
// const myfun=(event)=>
//     {
//       event.preventDefault();
      
//       document.getElementById("name").innerHTML="CityName:"+post.name;
//       document.getElementById("weather").innerHTML="Weather Status:"+post.weather[0].main;
//       document.getElementById("description").innerHTML="Description:"+post.weather[0].description;
//       document.getElementById("temp").innerHTML="Temperature:"+post.main.temp;
//       document.getElementById("sunrise").innerHTML="Sunrise:"+post.sys.sunrise;
//       document.getElementById("sunset").innerHTML="Sunset:"+post.sys.sunset;

//       const images=document.querySelectorAll("img");
//       images.forEach((image)=>{
//         image.classList.add('active')
//       });  
//     }
  
//     return(
//       <div className='box'>
//       <div className='innerbox'>
//         <div className='header'>
//     <span>
//       <img src={require('./weather/rainy1.jfif')} alt='cant found' className='active'/>
//       <h1>Weather Report </h1>
//       <img src={require('./weather/sun2.png')} alt='cant found' className='active'/>
//       </span>
//       </div>
//     <div className='form_controller'>
//       <form onSubmit={myfun}> 
//         <input type="text" id="t1" onChange={(e)=>setPost(e.target.value)}/><br></br>
//         <input type="submit" value="Weather Report" className='btn'/>
//       </form>
//       </div>
//       <div className='id-results'> 
//    <div id='box'>

//     <div id='name'></div>
//     <div id='notfound'></div>
//       <img src={require('./weather/city.jpg')} alt='cant find'/>
//       </div>
//       <div id='box'>
//       <div id='weather'></div>
//         <img src={require('./weather/weather.png')} alt='cant find'/>
//         </div>
//         <div id='box'>
//         <div id='description'></div>
//           <img src={require('./weather/climate.png')} alt='cant find'/>
//         </div>

//         <div id='box'>
//           <div id='temp'></div>
//           <img src={require('./weather/temp.png')} alt='cant find' id='img2'/>
//         </div>

//           <div id='box'>
//           <div id='sunrise'></div>
//             <img src={require('./weather/sunrise.jfif')} alt='cant find'/>
//           </div>

//           <div id='box'>
//           <div id='sunset'></div>
//             <img src={require('./weather/sunset.jfif')} alt='cant find'/>
//           </div>
//     </div>
//     <span><p>All rights reserved&copy; 2023</p></span>
//     </div>
//     </div>
//     )
//   }

//   export default Ragul


//myfun without useeffect project====================================  
  /*import axios from'axios'
  import { useState } from 'react'
  function Ragul()
  {
  
    const [post,setPost]=useState("null")
    const baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${post}&appid=de2ce82f7489dbceb4a6ced0106966e5`

const myfun=(event)=>
    {
      event.preventDefault();
      
      axios.post(baseURL).then((response)=>{
        setPost(response.data);
      }).catch((error)=>{
        if(error.response)
        setPost(error.response.data)
      })

      if(post.cod===200)
      {
      document.getElementById("name").innerHTML="CityName:"+post.name;
      document.getElementById("weather").innerHTML="Weather Status:"+post.weather[0].main;
      document.getElementById("description").innerHTML="Description:"+post.weather[0].description;
      document.getElementById("temp").innerHTML="Temperature:"+post.main.temp;
      document.getElementById("sunrise").innerHTML="Sunrise:"+post.sys.sunrise;
      document.getElementById("sunset").innerHTML="Sunset:"+post.sys.sunset;

      const images=document.querySelectorAll("img");
      images.forEach((image)=>{
        image.classList.add('active')
      });
    }
    if(post.cod==='404')
    {
      document.getElementById("name").innerHTML=post.message;
    }
    
    
  }

    return(
      <div className='box'>
      <div className='innerbox'>
        <div className='header'>
    <span>
      <img src={require('./weather/rainy1.jfif')} alt='cant found' className='active'/>
      <h1>Weather Report </h1>
      <img src={require('./weather/sun2.png')} alt='cant found' className='active'/>
      </span>
      </div>
    <div className='form_controller'>
      <form onSubmit={myfun}> 
        <input type="text" id="t1" onChange={(e)=>setPost(e.target.value)}/><br></br>
        <input type="submit" value="Weather Report" className='btn'/>
      </form>
      </div>
      <div className='id-results'> 
   <div id='box'>

    <div id='name'></div>
    <div id='notfound'></div>
      <img src={require('./weather/city.jpg')} alt='cant find'/>
      </div>
      <div id='box'>
      <div id='weather'></div>
        <img src={require('./weather/weather.png')} alt='cant find'/>
        </div>
        <div id='box'>
        <div id='description'></div>
          <img src={require('./weather/climate.png')} alt='cant find'/>
        </div>

        <div id='box'>
          <div id='temp'></div>
          <img src={require('./weather/temp.png')} alt='cant find' id='img2'/>
        </div>

          <div id='box'>
          <div id='sunrise'></div>
            <img src={require('./weather/sunrise.jfif')} alt='cant find'/>
          </div>

          <div id='box'>
          <div id='sunset'></div>
            <img src={require('./weather/sunset.jfif')} alt='cant find'/>
          </div>
    </div>
    <span><p>All rights reserved&copy; 2023</p></span>
    </div>
    </div>
    )
  }
  
  export default Ragul*/

  
//city name not found
  /*import axios from'axios'
  import { useState,useEffect } from 'react'
  function Ragul()
  {
  
    const [post,setPost]=useState("null")
    const baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${post}&appid=de2ce82f7489dbceb4a6ced0106966e5`

    async function fetchData()
    {
    axios.post(baseURL).then((response)=>{
    setPost(response.data);
  }).catch((error)=>{
    if(error.response)
    setPost(error.response.data)
  })
    }
  useEffect(()=>{
    fetchData()

})
const myfun=(event)=>
    {
      event.preventDefault();
      if(post.cod===200)
      {
      document.getElementById("name").innerHTML="CityName:"+post.name;
      document.getElementById("weather").innerHTML="Weather Status:"+post.weather[0].main;
      document.getElementById("description").innerHTML="Description:"+post.weather[0].description;
      document.getElementById("temp").innerHTML="Temperature:"+post.main.temp;
      document.getElementById("sunrise").innerHTML="Sunrise:"+post.sys.sunrise;
      document.getElementById("sunset").innerHTML="Sunset:"+post.sys.sunset;

      const images=document.querySelectorAll("img");
      images.forEach((image)=>{
        image.classList.add('active')
      });  
    }
    if(post.cod==='404')
    {
      document.getElementById("name").innerHTML=post.message
    }
    fetchData()
  }
    return(
      <div className='box'>
      <div className='innerbox'>
        <div className='header'>
    <span>
      <img src={require('./weather/rainy1.jfif')} alt='cant found' className='active'/>
      <h1>Weather Report </h1>
      <img src={require('./weather/sun2.png')} alt='cant found' className='active'/>
      </span>
      </div>
    <div className='form_controller'>
      <form onSubmit={myfun}> 
        <input type="text" id="t1" onChange={(e)=>setPost(e.target.value)}/><br></br>
        <input type="submit" value="Weather Report" className='btn'/>
      </form>
      </div>
      <div className='id-results'> 
   <div id='box'>

    <div id='name'></div>
    <div id='notfound'></div>
      <img src={require('./weather/city.jpg')} alt='cant find'/>
      </div>
      <div id='box'>
      <div id='weather'></div>
        <img src={require('./weather/weather.png')} alt='cant find'/>
        </div>
        <div id='box'>
        <div id='description'></div>
          <img src={require('./weather/climate.png')} alt='cant find'/>
        </div>

        <div id='box'>
          <div id='temp'></div>
          <img src={require('./weather/temp.png')} alt='cant find' id='img2'/>
        </div>

          <div id='box'>
          <div id='sunrise'></div>
            <img src={require('./weather/sunrise.jfif')} alt='cant find'/>
          </div>

          <div id='box'>
          <div id='sunset'></div>
            <img src={require('./weather/sunset.jfif')} alt='cant find'/>
          </div>
    </div>
    <span><p>All rights reserved&copy; 2023</p></span>
    </div>
    </div>
    )
  }
  
  export default Ragul*/

  /*import axios from 'axios'
 import { useState,useEffect } from 'react'

 function Ragul()
 {
  const [post,setPost]=useState(null)
  const baseURL="http://time.jsontest.com"
  //const baseURL="https://api.openweathermap.org/data/2.5/weather?q=karur&appid=de2ce82f7489dbceb4a6ced0106966e5"
  useEffect(()=>{
    axios.post(baseURL).then((response)=>{
    setPost(response.data)
  });
  })

  return(
    <>
    <h1>Test axios</h1>
    <h1>{post.date}</h1>
    </>
  )
 }
  export default Ragul;*/

  
