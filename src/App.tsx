import React from 'react'

const Comp = () => <div>123</div>

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit
        <code>src/App.js</code> and save to reload.
      </p>
      <Comp />
      <a
        className="App-link"
        href="https://reactjs.org"
        rel="noopener noreferrer"
        target="_blank"
      >
        Learn React
      </a>
    </header>
  </div>
)

export default App
