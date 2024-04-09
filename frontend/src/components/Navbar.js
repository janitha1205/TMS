import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Task Manager</h2>
        </Link>
        <Link to="/team">
          <h2>Task Members</h2>
        </Link>
      </div>
    </header>
  )
}

export default Navbar