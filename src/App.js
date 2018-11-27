import React, { Component } from 'react'
import styled from 'react-emotion'
import './App.css'

import RichTextEditor from './TextEditor/RichTextEditor'

const Wrapper = styled('div')`
  max-width: 42em;
  margin: 0 auto 20px;
  padding: 20px;
`

const Editor = styled(Wrapper)`
  background: #fff;
`

const Warning = styled(Wrapper)`
  background: #fffae0;

  & > pre {
    background: #fbf1bd;
    white-space: pre;
    overflow-x: scroll;
    margin-bottom: 0;
  }
`

class App extends Component {
  state = {
    error: null,
    info: null,
  }

  /**
   * Catch the `error` and `info`.
   *
   * @param {Error} error
   * @param {Object} info
   */

  componentDidCatch (error, info) {
    this.setState({error, info})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rich Text editor</h1>
          {this.state.error ? (
            <Warning>
              <p>
                An error was thrown by one of the example's React components!
              </p>
              <pre>
                <code>
                  {this.state.error.stack}
                  {'\n'}
                  {this.state.info.componentStack}
                </code>
              </pre>
            </Warning>
          ) : (
            <Editor>
              <RichTextEditor/>
            </Editor>
          )}
        </header>
      </div>
    )
  }
}

export default App
