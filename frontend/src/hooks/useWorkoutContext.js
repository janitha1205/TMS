import {WorkoutContext} from '../context/WorkoutContext'
import { useContext } from 'react'

export const useWorkoutContext = () => {

 
    const context =useContext(WorkoutContext)
    if(!context){
        throw Error('useworkoutcontext must be used inside an workout context provider')
    }





    return context
}

