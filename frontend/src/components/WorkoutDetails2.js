import { useWorkoutContext } from '../hooks/useWorkoutContext'
import { useState } from "react"
const WorkoutDetails2 = ({ workout }) => {
    const { dispatch } = useWorkoutContext()
    const [title, setTitle] = useState(workout.title)
    const [members, setMembers] = useState(workout.members)
    const [progress, setProgress] = useState('')
    const handleSubmit = async () =>{
        const workout2 = {title, members, progress}
        const response = await fetch('/api/test/' + workout._id,{
            method: 'PATCH',
            body: JSON.stringify(workout2),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        const json=await response.json()
        if(response.ok){
            dispatch({type: 'UPDATE_TASK',payload: json})

        }

    }
    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>members </strong>{workout.members}</p>
        <p><strong>Status: </strong>{workout.progress}</p>
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        onChange={(e) => setProgress(e.target.value)} 
         value={progress}
      />

        <button>edit the progress</button>
        </form>
        <p>{workout.createdAt}</p>
      </div>
    )
  }
  
  export default WorkoutDetails2