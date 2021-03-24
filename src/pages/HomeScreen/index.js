import React, { useState } from 'react'
import { StyleSheet, Linking, View, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Layout, Text } from '@ui-kitten/components'
import NavigationBar from '../../components/layout/header/NavigationBar'

import { SocialIcon } from 'react-native-elements'

import { SectionGrid } from 'react-native-super-grid'

export const HomeScreen = (props) => {
  const [items] = React.useState([
    //Plants
    {
      name: 'Orchid',
      price: '20$',
      uri:
        'https://cdn.pixabay.com/photo/2015/04/28/11/19/flower-743373_1280.jpg'
    },
    {
      name: 'Cyclamen',
      price: '5$',
      uri:
        'https://cdn.pixabay.com/photo/2020/02/18/17/10/cyclamen-4860174_1280.jpg'
    },
    {
      name: 'Calceolaria',
      price: '3$',
      uri:
        'https://cdn.pixabay.com/photo/2018/03/15/17/43/plant-3228944_1280.jpg'
    },
    { name: 'Dracaena', price: 'Call for price', uri: '' },
    { name: 'Snake Plant', price: '7$ - 9$', uri: '' },
    {
      name: 'Aglaonema ',
      price: '20$',
      uri:
        'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482914_1280.jpg'
    },
    {
      name: 'Cactus',
      price: '20$',
      uri:
        'https://cdn.pixabay.com/photo/2016/11/20/08/03/cactus-1842095_1280.jpg'
    },
    {
      name: 'Succulent',
      price: '20$',
      uri:
        'https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg'
    },
    { name: 'Aloe vera', price: '20$' },
    { name: 'Lily', price: '20$' },
    { name: 'Ficus', price: '20$' },
    { name: 'Schefflera (Umbrella Plant)', price: '20$' },
    { name: 'Cecus(?)', price: '20$' },
    //Flowers
    { name: 'Rose', price: '1$' },
    { name: 'Gerbera', price: '3$' },
    { name: 'Crithmum', price: '3$' },
    { name: 'Lilium', price: '1$' },
    { name: 'Stargazer', price: '1.5$' },
    { name: 'Bird of Paradise', price: '0.5$' },
    { name: 'Camomile', price: '2.5$' },
    // Supplies
    { name: 'Soil', price: '1$' }
  ])

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationBar {...props} />
        <Layout style={styles.container}>
          <SectionGrid
            itemDimension={90}
            // staticDimension={300}
            // fixed
            // spacing={20}
            sections={[
              {
                title: 'Plants',
                data: items.slice(0, 13)
              },
              {
                title: 'Flowers',
                data: items.slice(13, 20)
              },
              {
                title: 'Supplies',
                data: items.slice(20, 21)
              }
            ]}
            style={styles.gridView}
            renderItem={({ item, section, index }) => (
              <View style={[styles.itemContainer]}>
                <Image source={items.uri} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.price}</Text>
              </View>
            )}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
          />
        </Layout>
      </SafeAreaView>
      <Text style={styles.text} category='s1'>
        Flowers for every occasion
      </Text>

      <SocialIcon
        button
        light
        type='instagram'
        onPress={() =>
          Linking.openURL('https://www.instagram.com/canariaflowers/')
        }
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  safeAreaView: {
    flex: 1
  },
  text: { textAlign: 'center' },

  iconButton: {
    marginVertical: 16
  },
  gridView: {
    marginTop: 20,
    flex: 1
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff'
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10
  }
})
