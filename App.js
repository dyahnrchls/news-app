import React, {Component} from 'react'
import {Provider} from 'react-redux'

import HomeScreen from './src/screens/HomeScreen'
import store from './src/store/store'

export default class App extends Component{
  render(){
    return(
      <Provider store = {store}>
        <HomeScreen/>
      </Provider>
    )
  }
}

