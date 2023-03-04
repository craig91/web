import { ChangeEvent, useState } from 'react'
import Form from './Components/form'


function App() {
  const [count, setCount] = useState(0)
  // const [getNames, setNames] = useState <Number[]> ([])
  // const addToArray = () => {
  //   setNames((currentValue)=> {
  //     return [...currentValue, 4]
  //   })
  // }
  const upDateCounter = () => {
    setCount((currentValue) => {
      return currentValue + 1
    })
  }
 const deleteCounter = () => {
  setCount((currentValue) => {
    return currentValue - 1
  })
 }

 const [name, setName] = useState('')
//  const handleInput = (e:ChangeEvent <HTMLInputElement>) => {
//     e.target.value
//     console.log(e.target.value)
//     setName(e.target.value)
//  }

//  const defaultValue = {name: '', age: 0}
//  const [data, setData] = useState(defaultValue)
 
//  const handleInputName = (e:ChangeEvent <HTMLInputElement>) => {
//     console.log(e.target.value)
//     console.log(e.target.name)
//     setData((currentValue) => {
//       const key = e.target.name
//       return {
      
//       ...currentValue, [key]:e.target.value
//     }})
//  }
//  const handleInputAge = (e:ChangeEvent <HTMLInputElement>) => {
//   console.log(e.target.value)
//   setData((currentValue) => {return {
//     ...currentValue, age:parseInt(e.target.value)
//   }})
// }
  return (
    <div>
{/* 
    <input name="name" onChange={(e) => {handleInputName(e)}} type="text" />
    {data.name}
    {/* {name} */}
    {/* <input name="age" onChange={(e) => {handleInputName(e)}} type="text" />
    {data.age} */} 
      {/* {count}
        <button onClick={upDateCounter}>
        Count+
      </button>
  
      <button onClick={deleteCounter}>
        Count-
      </button> */}
      <Form />
    </div>
  )
}

export default App
