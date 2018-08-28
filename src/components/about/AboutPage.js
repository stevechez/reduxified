import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AboutPage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About Page</h1>
        <p>react, redux, etc yahaha</p>
        <Link to="index" className="btn btn-primary">Home</Link>
      </div>

    )

  }
}

export default AboutPage
