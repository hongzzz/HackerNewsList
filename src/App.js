import React, { Component } from 'react'
import logo from './icon.ico'
import List from './components/List'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img className="icon" src={logo} alt="img"/>
          <h2 className="App-title">Hacker News</h2>
        </header>
        <main className="App-main">
          <List/>
        </main>
      </div>
    )
  }
}

export default App
