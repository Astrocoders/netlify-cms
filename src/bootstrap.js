import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import store from './redux'
import history from './routing/history'
import { mergeConfig } from './actions/config'
import { ErrorBoundary } from './components/UI'
import App from './components/App/App'
import './components/EditorWidgets'
import './media/mediaLibrary'
import 'what-input'

const ROOT_ID = 'nc-root'

function bootstrap(opts = {}) {
  const { config } = opts

  /**
   * Get DOM element where app will mount.
   */
  function getRoot() {
    /**
     * Return existing root if found.
     */
    const existingRoot = document.getElementById(ROOT_ID)
    if (existingRoot) {
      return existingRoot
    }

    /**
     * If no existing root, create and return a new root.
     */
    const newRoot = document.createElement('div')
    newRoot.id = ROOT_ID
    document.body.appendChild(newRoot)
    return newRoot
  }

  /**
   * Dispatch config to store if received. This config will be merged into
   * config.yml if it exists, and any portion that produces a conflict will be
   * overwritten.
   */
  if (config) {
    store.dispatch(mergeConfig(config))
  }

  /**
   * Create connected root component.
   */
  const Root = () => (
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route component={App} />
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  )

  /**
   * Render application root.
   */
  render(<Root />, getRoot())
}

export default bootstrap
