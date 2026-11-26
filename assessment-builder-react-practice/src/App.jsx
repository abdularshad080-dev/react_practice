import './App.css'
import { useState } from 'react'
import { AssessmentDetails } from './components/AssessmentDetails'
import { Header } from './components/Header'

function App() {

const [isCreated, setIsCreated]=useState(false)

  return (
   <div>
    <Header/>
    <AssessmentDetails/>
   </div>
  )
}

export default App
