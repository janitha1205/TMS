import { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext()

  const [title, setTitle] = useState('')
  const [members, setMembers] = useState('')
  const [progress, setProgress] = useState('')
  const [error, setError] = useState(null)
 
  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, members, progress}
    
    const response = await fetch('/api/test', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setMembers('')
      setProgress('')
      console.log('new workout added',json)
      dispatch({type: 'CREATE_TASK', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Task</h3>

      <label> Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Members:</label>
      <input 
        type="text" 
        onChange={(e) => setMembers(e.target.value)} 
        value={members}
      />

      <label>Status:</label>
      <input 
        type="text" 
        onChange={(e) => setProgress(e.target.value)} 
        value={progress} 
      />

      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm