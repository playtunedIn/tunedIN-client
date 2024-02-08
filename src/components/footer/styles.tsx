import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footerImg: {
        width: '100%',
        height: 'auto',
        flex: 1,
        position: 'absolute',
        bottom: 0,
        resizeMode: 'cover'
      },
    footerText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginTop: 90,
        fontWeight: 'bold',   // make the text a bit bold
        marginBottom: 20
    },  
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: "center", 
        alignItems: "center", 
        marginBottom: 20
    },
    iconSpacing: {
        marginLeft: 20,
    },

});
  
export default styles;