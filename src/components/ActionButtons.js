/* @flow */

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ActionButton from 'react-native-action-button'

// 型の定義
type Props = {
  goBack(): void,
  goForward(): void,
  back(status: boolean): Function,
  forward(status: boolean): Function,
  canBack: boolean,
  canForward: boolean
}

export default class ActionButtons extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={{ flex: 1, padding: 50 }}>
          <ActionButton
            buttonColor="rgba(250, 250, 250, 1)"
            onPress={() => {
              this.props.goBack()
              this.props.back(true)
              console.log('back')
            }}
            renderIcon={active => (active ? <Text>←</Text> : <Text>←</Text>)}
          />
        </View>
        <View style={{ flex: 1, padding: 50 }}>
          <ActionButton
            buttonColor="rgba(250, 250, 250, 1)"
            onPress={() => {
              this.props.goForward()
              console.log('forward')
            }}
            renderIcon={active => (active ? <Text>→</Text> : <Text>→</Text>)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    position: 'absolute',
    bottom: 0
  },
  inputButton: {
    width: 48,
    height: 48,
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 48,
    backgroundColor: '#ff6347' // ポモドーロを意識してトマト色
  }
})
