import { View, Text, Button } from 'react-native';
import React from 'react';
import { Header } from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import { width } from 'react-native-dimension';
import { useForm } from 'react-hook-form';
import ForgotPassword from '../../components/Modals/ForgotPassword';
import Linksent from '../../components/Modals/Linksent';
import { useRef } from 'react';
import Onboarding from '../../components/Onboarding';
import { PrimaryBtn } from '../../components/Buttons';
import { CustomText } from "../../components/Text"
import CheckBox from '../../components/CheckBox';

export default function Login({ navigation }) {

    return (
        <ScreenWrapper
            statusBarColor={AppColors.blue}
            headerUnScrollable={() => <Header title={'WELCOME PINSTAR!'} />}>
            <View style={styles.container}>
                <CheckBox />
            </View>
        </ScreenWrapper>
    );
}
