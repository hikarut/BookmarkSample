/* @flow */

import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import Setting from './Setting'
import Webview from './Webview'
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view'

export default class TabView extends React.Component<{}> {
  render() {
    return (
      <ScrollableTabView
        style={styles.tabview}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Webview tabLabel="Webview1" />
        <Webview tabLabel="Webview2" />
        <Text tabLabel="Tab #3">project</Text>
        <Text tabLabel="Tab #4">favorite</Text>
        <Text tabLabel="Tab #5">project</Text>
        <Setting tabLabel="設定" />
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  tabview: {
    marginTop: 20
  }
})
