import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import AppFonts from '../../utills/AppFonts';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width(4),
        backgroundColor: AppColors.darkOrange,
        width: width(70),
        alignSelf: 'center',
        paddingVertical: height(1.8),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    text: {
        color: AppColors.white,
        fontSize: width(3.5),
        fontFamily: AppFonts.segoe_ui_bold
    },
});
export default styles;
