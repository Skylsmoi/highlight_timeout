import React from 'react'
import { connect } from 'react-redux'
import Countdown from '../components/Countdown.jsx'
import FinalState from '../components/FinalState.jsx'

export class Timer extends React.Component {
  render () {
    return (
      <div className='Timer'>
        {
          this.props.countdown === 'TIMERHALTED'
            ? <FinalState message={this.props.message} />
            : <Countdown countdown={this.props.countdown} />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ countdown, message }) => ({ countdown, message })

export default connect(mapStateToProps)(Timer)
