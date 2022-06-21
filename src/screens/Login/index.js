import ScreenWrapper from '../../components/ScreenWrapper';
import React, { useRef, useState } from "react"
import { View, Text, Button } from "react-native"
import { Header } from "../../components/Header"
import { Category } from "../../components/Category"
import { Textinput, InputField } from "../../components/Textinput"
import styles from './styles';
import AppColors from '../../utills/AppColors';
import { width } from 'react-native-dimension';


export default function Login({ navigation }) {


    return (
        <ScreenWrapper statusBarColor={AppColors.blue} headerUnScrollable={() => (<Header title={"WELCOME PINSTAR!"} />)}>
            <View style={styles.container}>
                <InputField label={"User Name"} placeholder={"Type here..."} />
                <InputField label={"Email"} placeholder={"Type here..."} />
            </View>
        </ScreenWrapper>
    );
}
