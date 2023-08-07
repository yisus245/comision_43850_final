import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderItem from '../Components/OrderItem'

const OrderScreen = () => {
  return (
    <View>
        <FlatList
            data={OrderData}
            keyExtractor={orderItem => orderItem.id}
            renderItem={({item}) => {
                return (
                    <OrderItem 
                      order={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})