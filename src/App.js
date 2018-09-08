import React, { Component } from 'react'
import ColorBox from './components/colorBox/colorBox'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='parent'>
        <ColorBox />
      </div>
    )
  }
}

export default App
