import { useState } from "react"
import { useWorkoutContext } from '../hooks/useWorkoutContext'
const Workdetails = ({workout}) =>{
    const { dispatch } = useWorkoutContext()
    const handleClick = async () =>{
        const response = await fetch('/api/test/' + workout._id,{method : "DELETE"})
        const json=await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_TASK',payload: json})

        }

    }


    return (

        <div className="workout-details">

            <h4>{workout.title}</h4>
            <p><strong>Members: </strong>{workout.members}</p>
            <p><strong>Status: </strong>{workout.progress}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>




    )
}
export default Workdetails
