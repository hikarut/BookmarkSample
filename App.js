/* @flow */

import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store'
import TabView from './src/components/TabView'

const store = configureStore()
console.log(store)

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <TabView />
      </Provider>
    )
  }
}
