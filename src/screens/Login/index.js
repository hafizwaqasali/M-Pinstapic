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

export default function Login({ navigation }) {
    const childModalRef = useRef();

    const { control } = useForm({
        mode: 'all',
    });
    return (
        <ScreenWrapper
            statusBarColor={AppColors.blue}
            headerUnScrollable={() => <Header title={'WELCOME PINSTAR!'} />}>
            <View style={styles.container}>
                <ForgotPassword ref={childModalRef} />

                <Button
                    title="Open modal"
                    onPress={() => childModalRef.current.show()}
                />
            </View>
        </ScreenWrapper>
    );
}
