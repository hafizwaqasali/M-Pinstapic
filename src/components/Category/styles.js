import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from 'react-native-dimension'
import AppColors from '../../utills/AppColors'

const styles = StyleSheet.create({
    container: {
        height: height(18),
        width: height(18),
        borderRadius: height(9),
        borderWidth: width(.2),
        borderColor: AppColors.white,
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: height(2)
    }
})
export default styles