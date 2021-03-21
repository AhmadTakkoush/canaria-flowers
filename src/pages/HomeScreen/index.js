import React, { useState } from 'react'
import { StyleSheet, Linking, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import heartIcons from '../../resources/heartIcons'
import { Layout, Button, Text } from '@ui-kitten/components'
import NavigationBar from '../../components/layout/header/NavigationBar'

import { SocialIcon } from 'react-native-elements'

import { SectionGrid } from 'react-native-super-grid'

export const HomeScreen = (props) => {
  const [icon, setIcon] = useState(heartIcons[0])

  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' }
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
                data: items.slice(0, 6)
              },
              {
                title: 'Flowers',
                data: items.slice(6, 12)
              },
              {
                title: 'Supplies',
                data: items.slice(12, 20)
              }
            ]}
            style={styles.gridView}
            renderItem={({ item, section, index }) => (
              <View
                style={[styles.itemContainer, { backgroundColor: item.code }]}
              >
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
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
