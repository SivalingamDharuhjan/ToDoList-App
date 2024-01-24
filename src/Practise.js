import React, { useState } from 'react'

const Practise = () => {

const[userInput ,setUserInput] = useState({})

const handleChange =(e)=>{

    setUserInput({[e.target]: e.target.value})
}




  return (
    <div>Practise</div>
  )
}

export default Practise