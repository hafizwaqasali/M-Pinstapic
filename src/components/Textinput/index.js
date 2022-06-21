import { View, Text, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './styles'
import AppColors from '../../utills/AppColors';
import { height, width } from 'react-native-dimension';
import AppFonts from '../../utills/AppFonts';

export const InputField = ({
    containerStyles,
    inputContainerStyles,
    labelStyles,
    keyboardType,
    placeholder,
    label,
    placeholderColor = AppColors.white,
    rightIcon,
    leftIcon,
    secureTextEntry,
    onBlur,
    onChangeText,
    onFocus,
    multiline,
    numberOfLines
}) => {
    return (
        <View style={[styles.container, containerStyles]}>
            {leftIcon}
            <TextInput
                style={[styles.inputContainer, inputContainerStyles]}
                placeholderTextColor={placeholderColor}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onBlur={onBlur}
                onChangeText={onChangeText}
                onFocus={onFocus}
                multiline={multiline}
                numberOfLines={numberOfLines}
                keyboardType={keyboardType}
            />
            <Text style={[styles.labelText, labelStyles]}>{label}</Text>
            {rightIcon}
        </View >

    )
}

