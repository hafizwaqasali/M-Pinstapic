import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import AppFonts from '../../utills/AppFonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.blue

    },
    labelTextStyle: {
        fontFamily: AppFonts.robotoregular,

    }
});
export default styles;
