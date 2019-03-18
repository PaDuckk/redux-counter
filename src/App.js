import React, { Component } from 'react'
import Counter from './components/Counter'
import Option from './components/Option'
import Buttons from './components/Buttons'

class App extends Component {
  render() {
    return (
      <div>
          <Counter/>
          <Option/>
          <Buttons/>
      </div>
    )
  }
}

export default App;
