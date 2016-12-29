import React from 'react'
import { connect } from 'react-redux'

import { setTimerHalted } from '../action-creators.js'

const moment = require('moment')

export class TimeSelector extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedTime: '',
      countdown: ''
    }
  }

  setTimer = (e) => {
    this.setState({selectedTime: e.target.value})
  }

  startTimer = () => {
    const input = this.state.selectedTime.split(':')
    const timeout = moment({ hour: input[0], minute: input[1], seconde: 0 }).unix()

    let now
    let diffTimeout
    let duration
    const countdownInterval = window.setInterval(() => {
      now = moment().unix()
      diffTimeout = timeout - now
      duration = moment.duration(diffTimeout * 1000, 'milliseconds')

      // console.log(timeout, now, diffTimeout, duration)

      this.setState({...this.state, countdown: `${duration.hours()}:${duration.minutes()}:${duration.seconds()}`})

      if (diffTimeout <= 0) {
        window.clearInterval(countdownInterval)
        this.props.dispatch(setTimerHalted(true))
      }
    }, 1000)
  }

  showTimer = () => {
    const timer = moment(this.state.selectedTime)
    return timer.isValid()
  }

  render () {
    return (
      <div className='TimeSelector'>
        <label htmlFor='setTime'>
          Time : <input id='setTime' type='text' value={this.state.selectedTime} onChange={this.setTimer} />
        </label>
        <button onClick={this.startTimer}>Validate</button>
        <br />
        <div className='displayTimer'>Result : { this.state.countdown }</div>
      </div>
    )
  }
}

const mapStateToProps = ({ timerHalted }) => ({ timerHalted })

export default connect(mapStateToProps)(TimeSelector)
