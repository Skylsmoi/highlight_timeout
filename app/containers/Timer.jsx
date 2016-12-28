import React from 'react'
import { connect } from 'react-redux'

export class Timer extends React.Component {
  render () {
    return (
      <div className='Timer'>
        { this.props.time }
      </div>
    )
  }
}

const mapStateToProps = ({ time }) => ({ time })

export default connect(mapStateToProps)(Timer)
