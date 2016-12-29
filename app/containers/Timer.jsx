import React from 'react'
import { connect } from 'react-redux'

export class Timer extends React.Component {
  render () {
    return (
      <div className='Timer'>
        { this.props.timerHalted }
      </div>
    )
  }
}

const mapStateToProps = ({ timerHalted }) => ({ timerHalted })

export default connect(mapStateToProps)(Timer)
