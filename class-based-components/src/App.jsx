import { useState } from 'react'
import './App.css'
import ClassBasedComponent from './components/ClassBasedComponent'  
import OuterComponent from './components/NestedComponents'
import Car from './components/Car'

function App() {

  return (
    <>
      <ClassBasedComponent name="John" name2= "Roman Reigne" />
      <OuterComponent />
      <Car />
    </>
  )
}

export default App
