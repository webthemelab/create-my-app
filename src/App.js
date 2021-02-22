import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const nayoks =["Anawer",'Alamgir','Salman shah']
  const products =[
    {name:'Photoshop',price:'$90.99'},
    {name:'illastator',price:'$99'},
    {name:'PDF',price:'$66'},
    {name:'Primer FI',price:'$249.99'}

  ]

  const nayokName = nayoks.map(nayok =>nayok);
  console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok =><li>{nayok}</li>)
        }
         {
           products.map(product =><li>{product.name}</li>)
         }
      </ul>
      {
        products.map(product =><Product product = {product}></Product>)
      }
         
      </header>
    </div>
  );
}


 function Counter() {
   const [count, setCount] = useState(10);
   const handelIncrease = ()=>setCount(count + 1);
   const handelDecrease =()=> setCount(count - 1);
    return(
      <div>
        <h1>Count:{count}</h1>
        <button onClick ={handelIncrease}>Increase</button>
        <button onClick={handelDecrease}>Decrease</button>
      </div>
    )
 }  

 function Users() {
   const [users, setUsers] =useState([]);
   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>res.json())
      .then(data =>setUsers(data))
   },[])

   
   return(
     <div>
        <h3>Dynamic Users:{users.length}</h3>
        <ul>
          {
            users.map(user =><li>{user.name}</li>)
          }
        </ul>
     </div>
   )
 }

function Product(props) {
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    hight:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
   return(
    <div style ={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>By now</button>
    </div>
  )
  
}
 function Person(props) {
    return(
      <div style ={{border:'2px solid yellow',margin:'10px',width:'400px'}}>
        <h3>My name:{props.name}</h3>
        <p>My profession:{props.job}</p>
      </div>
    )
 }
 

export default App;
