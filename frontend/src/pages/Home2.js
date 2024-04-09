import { useEffect } from "react"
import {useWorkoutContext}  from '../hooks/useWorkoutContext'

// components
import Workdetails2 from '../components/WorkoutDetails2'

const Home = () => {
  const {workouts , dispatch}=useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts  = async () => {
      const response = await fetch('/api/test')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_TASK',payload: json})
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout)=>(<Workdetails2 key={workout._id} workout={workout}/>))}
      </div>
     
    </div>
  )
}

export default Home