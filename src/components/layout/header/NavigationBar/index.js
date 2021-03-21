import React from 'react'

import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components'

const NavigationBar = (props) => {
  const navigateToCall = () => {
    props.navigation.navigate('Call')
  }

  const PhoneIcon = (props) => <Icon {...props} name='phone' />

  const renderSettingsAction = () => (
    <TopNavigationAction icon={PhoneIcon} onPress={navigateToCall} />
  )

  return (
    <>
      <TopNavigation
        title='Canaria Flowers'
        alignment='center'
        rightControls={renderSettingsAction()}
      />
      <Divider />
    </>
  )
}

export default NavigationBar
