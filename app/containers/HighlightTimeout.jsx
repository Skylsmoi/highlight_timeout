import React from 'react'
import { connect } from 'react-redux'

import TimeSelector from './TimeSelector.jsx'
import Timer from './Timer.jsx'

export class HighlightTimeout extends React.Component {
  render () {
    return (
      <div className='HighlightTimeout'>
        {
          this.props.time === 0
            ? <TimeSelector />
            : <Timer />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ time }) => ({ time })

export default connect(mapStateToProps)(HighlightTimeout)
