import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root'))
