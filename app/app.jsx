import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

require('./css/style.styl')
// require('./lib/font-awesome-4.7.0/css/font-awesome.css')

import HighlightTimeout from './containers/HighlightTimeout.jsx'

import { store } from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <HighlightTimeout />
  </Provider>
  , document.getElementById('content')
)
