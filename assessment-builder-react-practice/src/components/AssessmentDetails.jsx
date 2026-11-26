import React from 'react'
import { useState } from 'react'
import { Button } from './Button'
import './AssessmentDetails.css'


export const AssessmentDetails = () => {

const [assessmentName, setAssessmentName] = useState('')
const [assessmentType, setAssessmentType] = useState('')
const [duration, setDuration] = useState('')
const handleCreateAssessment = () => {
  if (!assessmentName || !assessmentType || !duration) {
    alert('Please fill in all the fields')
    return
  }

  alert('Assessment Created Successfully!')
}

  return (
    <div className="assessment-container">
        <h2>AssessmentDetails</h2>
        
        <div className="form-group">
        <label>Assessment Name  </label>
         <input
            type="text"
            placeholder="Enter Assessment Name"
            value={assessmentName}
            onChange={(e) =>setAssessmentName(e.target.value)}
        />

        <p>Assessment Name: {assessmentName}</p>
        <br/>
        </div>
        <div className="form-group">
        <label>Assessment Type</label>

        <select
            value={assessmentType}
            onChange={(e)=>setAssessmentType(e.target.value)}
            >
        <option value="">Select assessment type</option>
        <option value="quiz">Quiz</option>
        <option value="MCQ">MCQ</option>
        <option value="exam">Examination</option>
        </select>
        <p>Assessment Type: {assessmentType}</p>
        
        <br/>
        </div>
        <div className="form-group">
        <label>Duration (minutes)</label>
        <input 
            type="number"
            placeholder='Enter duration'
            value={duration}
            onChange={(e)=>setDuration(e.target.value)}
        />
        <p>Duration: {duration} min</p>

        <Button
        text="Create Assessment"
        onClick={handleCreateAssessment}
        />
        </div>


       
    </div>
  )
}
