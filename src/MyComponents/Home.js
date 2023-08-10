import React from 'react'

const Home = () => {
    let Homestyle={
        maxhight:"100%",
        padding:"10px"
        
    }
let Div={
   margin:"30px"
   
    
}


  return (
    <div className=""  style={Div}>
        <h1 style={Homestyle}>List of All the Todos</h1>
      <p style={Homestyle}>
     Hear you can see all the todos,and if you want you can also delete those todos.
      </p>
    </div>
  )
}

export default Home
