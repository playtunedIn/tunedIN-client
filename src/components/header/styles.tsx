import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headingContainer: {
        display: 'flex',
        marginBottom: 30,
    },
    topHeaderRow: {
        flexDirection: 'row',
    },
    logoImg: {
        width: '50%',
        height: '30%',
        paddingTop: 60,
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 20
    },
    profileImg: {
        width: 50,
        height: 50,
        position: 'absolute',
        right: 0,
        marginTop: 10,
        marginRight: 10
    },
    musicImg: {
        width: '100%',
        height: '10%',
        paddingTop: 20,
        paddingBottom: 10,
        resizeMode: 'repeat'
    },

});
  
export default styles;
