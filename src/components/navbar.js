import React, {Component} from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Chyi Wang</a>
          </div>
      
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav pull-right">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

          </div>
        </div>
      </nav>
      </div>
    )
  }
}