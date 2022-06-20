import { useDispatch } from 'react-redux';
import ScreenWrapper from '../../components/ScreenWrapper';
import React from "react"
import { PrimaryBtn } from "../../components/Buttons";

export default function Login({ navigation }) {
    return (
        <ScreenWrapper>
            <PrimaryBtn title={"Button"} />
        </ScreenWrapper>
    );
}
