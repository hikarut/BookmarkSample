/* @flow */

import React from 'react'
import { StyleSheet, WebView, View } from 'react-native'
// import ActionButtons from './ActionButtons'
import ActionButtons from '../container/ActionButtons'

// 型の定義
type Props = {
  // back(status: boolean): Function,
  // forward(status: boolean): Function
}

export default class Webview extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  // props: Props
  webview: WebView

  goBack(): void {
    this.webview.goBack()
  }

  goForward(): void {
    this.webview.goForward()
  }

  // ロード終了時に呼ばれる
  onLoad(): void {
    console.log('onLoad')
  }

  // ロード開始時に呼ばれる
  onLoadStart(): void {
    console.log('onLoadStart')
  }

  onNavigationStateChange(): void {}

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={webview => {
            this.webview = webview
          }}
          source={{ uri: 'https://www.yahoo.co.jp/' }}
          style={styles.view}
          javaScriptEnabled={true}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onLoad={this.onLoad.bind(this)}
          onLoadStart={this.onLoadStart.bind(this)}
        />

        <ActionButtons
          goBack={this.goBack.bind(this)}
          goForward={this.goForward.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    marginBottom: 0
  }
})
