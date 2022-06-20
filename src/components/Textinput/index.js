import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import { TextInput } from 'react-native-paper';
import AppColors from '../../utills/AppColors';
import { width } from 'react-native-dimension';
import AppFonts from '../../utills/AppFonts';

export const Textinput = ({
    containerStyles,
    keyboardType,
    placeholder,
    label,
    mode = "outlined",
    activeOutlineColor = AppColors.white,
    inactiveOutlineColor = AppColors.white,
    placeholderColor = AppColors.white,
    textColor = AppColors.white,
    fontFamily = AppFonts.segoe_ui_regular,
    fieldBackgroundColor = AppColors.blue,
}) => {
    return (
        <View style={[styles.container, containerStyles]}>
            <TextInput
                keyboardType={keyboardType}
                mode={mode}
                label={label}
                placeholder={placeholder}
                outlineColor={inactiveOutlineColor}
                activeOutlineColor={activeOutlineColor}
                style={{ backgroundColor: fieldBackgroundColor, }}
                theme={{
                    roundness: width(3),
                    colors: {
                        placeholder: placeholderColor,
                        text: textColor
                    },
                    fonts: {
                        regular: { fontFamily: fontFamily, },
                    }
                }}

            />
        </View >
    )
}

