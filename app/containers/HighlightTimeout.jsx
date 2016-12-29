import React from 'react'
import { connect } from 'react-redux'

import TimeSelector from './TimeSelector.jsx'
import Timer from './Timer.jsx'

export class HighlightTimeout extends React.Component {
  render () {
    return (
      <div className='HighlightTimeout'>
        {
          this.props.timerHalted === false
            ? <TimeSelector />
            : <Timer />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ timerHalted }) => ({ timerHalted })

export default connect(mapStateToProps)(HighlightTimeout)
