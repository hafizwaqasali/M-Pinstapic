import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import { width } from 'react-native-dimension'
import AntDesign from "react-native-vector-icons/AntDesign"
import AppColors from '../../utills/AppColors'

export const Category = ({
    Icon = AntDesign,
    containerStyles,
    onPress,
    iconName = "closecircle",
    iconColor = AppColors.white,
}) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyles]} onPress={onPress}>
            <Icon name={iconName} size={width(20)} color={iconColor} />
        </TouchableOpacity>
    )
}

