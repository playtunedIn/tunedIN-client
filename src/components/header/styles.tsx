import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headingContainer: {
        display: 'flex',
        marginBottom: 30,
    },
    logoImg: {
        width: '50%',
        height: '30%',
        paddingTop: 60,
        paddingBottom: 30,
        marginLeft: 5,
        resizeMode: 'contain',
        
    },
    profileImg: {
        width: 50,
        height: 50,
        position: 'absolute',
        right: 0,
        marginTop: 15,
        marginRight: 15
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
