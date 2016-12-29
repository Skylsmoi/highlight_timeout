import React from 'react'
import { connect } from 'react-redux'

import { setTimerHalted, setCountdown, setMessage } from '../action-creators.js'

const moment = require('moment')

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
    const timeout = moment({ hour: input[0], minute: input[1], seconde: input[2] ? input[2] : 0 }).unix()

    let now
    let diffTimeout
    let duration

    this.props.dispatch(setTimerHalted(true))
    const countdownInterval = window.setInterval(() => {
      now = moment().unix()
      diffTimeout = timeout - now
      duration = moment.duration(diffTimeout * 1000, 'milliseconds')

      // console.log(timeout, now, diffTimeout, duration)
      // this.setState({...this.state, countdown: `${duration.hours()}:${duration.minutes()}:${duration.seconds()}`})

      if (diffTimeout <= 0) {
        window.clearInterval(countdownInterval)
        this.props.dispatch(setCountdown(`TIMERHALTED`))
      } else {
        this.props.dispatch(setCountdown(`${duration.hours()}h ${duration.minutes()}min ${duration.seconds()}s`))
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
        <div className='usage'>
          Utilisation :<br />
          - Entrer l heure de fin du timer dans le champ "Time" au format HH:mm (exemple, pour 13h 37min et 00s, entrer "13:37:00") <br />
          -- <b>Attention</b> : 00:00 est la premiere seconde du prochain jour donc, pour minuit, entrer "23:59:59".<br />
          - Cliquer sur "Valider"<br />
          - Appuyer sur F11 pour mettre en plein écran sur Windows (Control-Command-F sur OSX Safari)<br />
          <br />
          * Possible de tester le rendu avec des heures proches, genre 1 minute plus tard *
        </div>
        <label htmlFor='setTime'>
          Time : <input id='setTime' type='text' value={this.state.selectedTime} onChange={this.setTimer} />
        </label>
        <br />
        <label htmlFor='setMessage'>
          Message : <input id='setMessage' type='text' onChange={(e) => this.props.dispatch(setMessage(e.target.value))} />
        </label>
        <br />
        <button onClick={this.startTimer}>Validate</button>
      </div>
    )
  }
}

const mapStateToProps = ({ timerHalted, countdown }) => ({ timerHalted, countdown })

export default connect(mapStateToProps)(TimeSelector)
