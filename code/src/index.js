import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  tickStop = () => {
    clearInterval(this.timerID)
  }

  tickStart = () => {
    this.timerID = setInterval(() =>
      this.tick(), 1000)
  }

  clockClassName = () => {
    if (this.state.date.getMinutes() % 2 === 0) {
      return "clock even"
    } else {
      return "clock odd"
    }
  }

  render() {
    return (
      <div className={this.clockClassName()}>
        <div className="time">
          <h3>current time:</h3>
          <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
        <div className="buttons">
          <button onClick={this.tickStop}>
          Stop
          </button>
          <button onClick={this.tickStart}>
          Start
          </button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"))
