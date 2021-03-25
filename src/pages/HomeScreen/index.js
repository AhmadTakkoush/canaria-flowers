import React, { useState } from 'react'
import { StyleSheet, Linking, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Layout, Text } from '@ui-kitten/components'
import NavigationBar from '../../components/layout/header/NavigationBar'

import DrawerSimpleUsageShowcase from '../../components/layout/header/Drawer'

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
    {
      name: 'Dracaena',
      price: 'Call for price',
      uri:
        'https://cdn.pixabay.com/photo/2020/02/09/08/44/houseplant-4832361_1280.jpg'
    },
    {
      name: 'Snake Plant',
      price: '7$ - 9$',
      uri:
        'https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1615586189/vendor/6498/catalog/product/2/0/20200304122155_file_5e5ef4a3ccb60_5e5ef7b7cd5fa_5ef4d3a32d022_5ef4d3a57a408.jpg'
    },
    {
      name: 'Aglaonema',
      price: '5$',
      uri:
        'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482914_1280.jpg'
    },
    {
      name: 'Cactus',
      price: '1$',
      uri:
        'https://cdn.pixabay.com/photo/2016/11/20/08/03/cactus-1842095_1280.jpg'
    },
    {
      name: 'Succulent',
      price: '1$',
      uri:
        'https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg'
    },
    {
      name: 'Aloe vera',
      price: 'Call for price',
      uri:
        'https://cdn.pixabay.com/photo/2015/03/17/16/58/aloe-vera-678040_1280.jpg'
    },

    {
      name: 'Ficus',
      price: '5$',
      uri:
        'https://cdn.webshopapp.com/shops/30495/files/310083118/ficus-exotica-a-beautiful-spiral-shaped-houseplant.jpg'
    },
    {
      name: 'Schefflera', //(Umbrella Plant)
      price: '5$',
      uri:
        'https://cdn.apartmenttherapy.info/image/upload/v1591496724/gen-workflow/product-listing/umbrellatree.jpg'
    },
    {
      name: 'Cecus(?)',
      price: '3$',
      uri:
        'https://cdn.pixabay.com/photo/2015/04/28/11/19/flower-743373_1280.jpg'
    },
    //Flowers
    {
      name: 'Rose',
      price: '1$',
      uri:
        'https://cdn.pixabay.com/photo/2018/11/08/12/02/rose-3802424_1280.jpg'
    },
    {
      name: 'Gerbera',
      price: '3$',
      uri:
        'https://cdn.pixabay.com/photo/2019/07/18/10/52/gerbera-4346124_1280.jpg'
    },
    {
      name: 'Crithmum',
      price: '3$',
      uri:
        'https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/incurante_della_siccita_e_della_salsedine_fiorisce_in_piena_estate_fra_luglio_e_settembre_.jpg'
    },
    {
      name: 'Lily',
      price: '1$',
      uri:
        'https://cdn.pixabay.com/photo/2018/10/21/19/23/lily-3763573_1280.jpg'
    },
    {
      name: 'Stargazer',
      price: '1.5$',
      uri:
        'https://cdn.pixabay.com/photo/2018/07/26/22/33/lily-3564784_1280.jpg'
    },
    {
      name: 'Bird of Paradise',
      price: '0.5$',
      uri:
        'https://cdn.pixabay.com/photo/2015/12/02/14/51/bird-of-paradise-flower-1073282_1280.jpg'
    },
    {
      name: 'Camomile',
      price: '2.5$',
      uri:
        'https://cdn.pixabay.com/photo/2019/05/17/00/13/meadows-4208643_1280.jpg'
    },
    // Supplies
    {
      name: 'Soil',
      price: '1$',
      uri:
        'https://www.logsdirect.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/o/top-soil.jpg'
    }
  ])

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationBar {...props} />
        <Layout style={styles.container}>
          <SectionGrid
            itemDimension={90}
            // staticDimension={400}
            // fixed
            // spacing={10}
            sections={[
              {
                title: 'Plants',
                data: items.slice(0, 12)
              },
              {
                title: 'Flowers',
                data: items.slice(12, 19)
              },
              {
                title: 'Supplies',
                data: items.slice(19, 21)
              }
            ]}
            style={styles.gridView}
            renderItem={({ item }) => (
              <View style={[styles.itemContainer]}>
                <ImageBackground
                  style={styles.container}
                  source={{ uri: item.uri }}
                />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            )}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
          />
        </Layout>
      </SafeAreaView>

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
    height: 150,
    backgroundColor: '#cfc8c5'
  },
  itemName: {
    fontSize: 16,
    color: '#5a834e',
    fontWeight: '600'
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: 12,
    color: 'red'
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#FC94AF',
    color: 'white',
    padding: 10
  }
})
