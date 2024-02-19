// Write your code here
import {Component} from 'react'
import './index.css'

const initial = {
  timerSeconds: 0,
  isTimerRunning: false,
}
class Stopwatch extends Component {
  state = initial

  timerStarted = () => {
    this.setState(prevState => ({timerSeconds: prevState.timerSeconds + 1}))
  }

  onStartBtn = () => {
    this.timerId = setInterval(this.timerStarted, 1000)
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onStopBtn = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onResetBtn = () => {
    clearInterval(this.timerId)
    this.setState(initial)
  }

  render() {
    const {timerSeconds, isTimerRunning} = this.state
    const minutes = Math.floor(timerSeconds / 60)
    const seconds = Math.floor(timerSeconds % 60)
    return (
      <div className="bg_container">
        <h1 className="heading_stopwatch">Stopwatch</h1>
        <div className="cardContainer">
          <div className="timerImageContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer_Image"
            />
            <p className="timer_para">Timer</p>
          </div>
          <h1 className="timerResult_heading">
            {minutes > 9 ? minutes : `0${minutes}`}:
            {seconds > 9 ? seconds : `0${seconds}`}
          </h1>
          <div className="buttonContainer">
            <button
              className="btn green"
              onClick={this.onStartBtn}
              type="button"
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button className="btn red" onClick={this.onStopBtn} type="button">
              Stop
            </button>
            <button
              className="btn orange"
              onClick={this.onResetBtn}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
