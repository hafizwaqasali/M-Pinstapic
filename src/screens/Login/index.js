import ScreenWrapper from '../../components/ScreenWrapper';
import React, { useRef, useState } from "react"
import { View, Text, Button } from "react-native"
import { Header } from "../../components/Header"
import { Category } from "../../components/Category"
import styles from './styles';
import AppColors from '../../utills/AppColors';


export default function Login({ navigation }) {


    return (
        <ScreenWrapper statusBarColor={AppColors.blue} headerUnScrollable={() => (<Header title={"WELCOME PINSTAR!"} />)}>
            <View style={styles.container}>

            </View>
        </ScreenWrapper>
    );
}
