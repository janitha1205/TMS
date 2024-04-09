const WorkoutDetails = ({ workout }) => {

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>members </strong>{workout.members}</p>
      <p><strong>Status: </strong>{workout.progress}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails