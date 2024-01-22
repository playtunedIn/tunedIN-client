import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headingContainer: {
        display: 'flex',
        marginBottom: 30,
    },
    logoImg: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 60,
        paddingBottom: 30,
        resizeMode: 'contain',
    },
    profileImg: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 0,
        marginTop: 10,
        marginRight: 10
    },
    musicImg: {
        width: '100%',
        height: '10%',
        marginTop: -10,
        paddingTop: 15,
        paddingBottom: 15,
        resizeMode: 'repeat'
    },

});
  
export default styles;
