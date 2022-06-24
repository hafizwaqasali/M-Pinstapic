import { View, Text, Button } from 'react-native';
import React from 'react';
import { Header } from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import { PrimaryBtn } from '../../components/Buttons';
import { InputField, InputFieldValidate } from "../../components/Input"
import SocialIcon from "../../components/SocialIcon"
import { width } from 'react-native-dimension';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ForgotPassword from '../../components/Modals/ForgotPassword';
import { useRef } from 'react';

export const loginValidationSchema = yup.object().shape({
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .matches(
            /[!@#$%^&*()\-_"=+{}; :,<.>]/,
            'Password must have a special character',
        )
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    email: yup.string().email("Enter a Valid email address").required("Email is Required")
});


export default function Login({ navigation }) {
    const childModalRef = useRef()

    const { control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(loginValidationSchema),
    })
    return (
        <ScreenWrapper
            statusBarColor={AppColors.blue}
            headerUnScrollable={() => <Header title={'WELCOME PINSTAR!'} />}>
            <View style={styles.container}>
                <ForgotPassword ref={childModalRef} />
                <Button title="Open modal" onPress={() => childModalRef.current.show()} />
            </View>
        </ScreenWrapper>
    );
}
