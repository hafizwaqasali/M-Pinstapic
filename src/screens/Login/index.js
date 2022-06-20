import ScreenWrapper from '../../components/ScreenWrapper';
import React, { useRef, useState } from "react"
import { View, Text, Button } from "react-native"
import { Textinput } from "../../components/Textinput"

import styles from './styles';

export default function Login({ navigation }) {


    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <Textinput
                    label={"Phone number"}
                    keyboardType={"phone-pad"}
                />
            </View>

        </ScreenWrapper>
    );
}
