import './App.css'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import { useState } from 'react'

function App() {
  //js code
  /* states to show the data from input boxes */
  const[principle, setPrinciple] = useState(0)
  const[rate,setRate] = useState(0)
  const[year,setYear] = useState(0)
  const [interest, setInterest] = useState(0)
  /* for conditional rendering */
  const[isPrinciple,setIsPrinciple] = useState(true)
  const[isRate,setIsRate] = useState(true)
  const[isYear,setIsYear] = useState(true)

  const Validate = (e)=>{
    const {name, value} = e.target /* object destructuring */
    console.log(name);
    console.log(value);

    /* reg expr = /^[0-9]*$/
    match() - to check the pattern matches the value  
            - returns array if values match
            - returns null if they dont  
    */
   /* console.log(value.match(/^[0-9]*$/)); */
   /* !! - to convert into boolean */

   if(!!value.match(/^[0-9]*$/)){
    if(name==='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name==='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }

   }
   else{
    if(name==='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name==='rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }

   }

  }

  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)

  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    setInterest((principle*rate*year)/100)

  }




    



  return (
    //jsx code
    <>
    <div style={{height:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center' >
      <div className='bg-light p-5 rounded' style={{width:'500px', height:'100vh'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>
        <div style={{height:'150px'}} className='bg-warning mt-5 rounded d-flex justify-content-center align-items-center flex-column'>
        <h1>₹ {interest}</h1>
        <p>Total simple interest</p>
      </div>
      <form onSubmit={handleCalculate}>
        <div className="mb-3 mt-5">
        <TextField id="outlined-basic" name='principle' value={principle || ""} onChange={(e)=>Validate(e)} label="Principle amount" variant="outlined" className='w-100' />
        { !isPrinciple &&
          <p className='text-danger' >*Invalid input</p>}
        </div>
        <div className="mb-3">
        <TextField id="outlined-basic" name='rate' value={rate || ""} onChange={(e)=>Validate(e)} label="Rate of Interest (p.a)%" variant="outlined" className='w-100' />
        { !isRate &&
          <p className='text-danger' >*Invalid input</p>}
        </div>
        <div className="mb-3">
        <TextField id="outlined-basic" name='year' value={year || ""} onChange={(e)=>Validate(e)} label="Year (Yr)" variant="outlined" className='w-100' />
        { !isYear &&
          <p className='text-danger' >*Invalid input</p>}
        </div>
        <div className="mb-3 d-flex justify-content-between ">
        <Button type='submit' variant="contained" color="success" style={{height
        :'60px', width:'190px'}} disabled={isPrinciple && isRate && isYear?false:true} >CALCULATE</Button>
        <Button onClick={handleReset} variant="outlined" style={{height
        :'60px', width:'190px'}} >RESET</Button>
      </div> 
      </form>
      



      </div>
      
    </div>
      
    </>
  )
}

export default App
