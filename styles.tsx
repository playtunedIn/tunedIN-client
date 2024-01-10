import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,
  },
  logoIN: {
    color: '#6200EE',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  playButton: {
    width: 250,
    backgroundColor: '#6200EE',
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginBottom: 20
  },
  joinButton: {
    width: 250,
    backgroundColor: '#6200EE',
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  joinCode: {
    width: 10
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 20,  // Adjust the spacing as needed
    marginBottom: 20,  // Adjust the spacing as needed
    alignItems: 'center',
    justifyContent: 'space-between',   // To spread the icons across the width
    paddingHorizontal: 40  // Add some padding to the left and right to adjust the icon positions
  },
  iconSpacing: {
    marginLeft: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'   // make the text a bit bold
  },
  });
  
  export default styles;