import { useEffect } from "react"
import {useWorkoutContext}  from '../hooks/useWorkoutContext'
import WorkoutForm from '../components/WorkoutForm'
// components
import Workdetails from '../components/Workdetails'

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
        {workouts && workouts.map((workout)=>(<Workdetails key={workout._id} workout={workout}/>))}
      </div>
      <WorkoutForm></WorkoutForm>
    </div>
  )
}

export default Home