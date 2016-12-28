import React from 'react'
import { connect } from 'react-redux'

import { setTime } from '../action-creators.js'

const moment = require('moment');

export class TimeSelector extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedTime: ''
    }
  }

  setTimer = (e) => {
    this.setState({selectedTime: e.target.value})
  }

  startTimer = () => {
    const input = this.state.selectedTime.split(':')

    const timeout = moment({ hour: input[0], minute: input[1]})
    // const now = moment()
    // const diffTime = now.diff(timeout)
    console.log('test')
    console.log(timeout)

    let now
    let diffTimeout
    window.setInterval(function () {
      now = moment()
      diffTimeout = timeout.diff(now, 'seconds')
      if (diffTimeout <= 0) console.log('gg', diffTimeout)
      else console.log('not gg : ', diffTimeout)
    }, 200)



    // if (timeout.isValid()) {
      // console.log('woot', timeout)
      // this.setState({selectedTime: timeout.format('HH:mm')})
    // } else console.log(timeout)
    // this.setState({selectedTime: e.target.value})
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
        <div className='displayTimer'>Result : { this.showTimer() }</div>
      </div>
    )
  }
}

const mapStateToProps = ({ time }) => ({ time })

export default connect(mapStateToProps)(TimeSelector)
