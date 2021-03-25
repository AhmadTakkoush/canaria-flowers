import React from 'react'
import { StyleSheet, Button, Linking, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import MapView from 'react-native-maps'

import {
  Avatar,
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components'

const BackIcon = (props) => <Icon {...props} name='arrow-back' />

export const CallScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack()
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  )

  return (
    <ScrollView style={styles.safeAreaView}>
      <TopNavigation
        title='Contact'
        alignment='center'
        leftControl={BackAction()}
      />
      <Divider />
      <MapView
        style={styles.map}
        initialRegion={{
          longitude: 35.48122710681048,
          latitude: 33.89750439906285,
          latitudeDelta: 0,
          longitudeDelta: 0
        }}
      ></MapView>
      <Button
        title='Call us'
        onPress={() => Linking.openURL(`tel:${70742813}`)}
      />
      <Avatar
        style={styles.avatar}
        size='large'
        source={require('../../../assets/icon.png')}
      />
      <Text style={styles.canaria}>
        Canaria Flowers {'\n'} Flowers for every occasion
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  map: {
    height: 400
  },
  avatar: { alignSelf: 'center', marginTop: 25 },
  canaria: {
    textAlign: 'center',
    paddingTop: 25
  }
})
