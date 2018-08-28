import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>react, redux, etc yahaha</p>
        <Link to="about" className="btn btn-primary">Learn More</Link>
      </div>

    )

  }
}

export default HomePage
