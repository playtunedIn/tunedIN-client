import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicImg: {
    marginTop: 50,
    width: 1275,
    height: 100
  },
  footerImg: {
    width: 1475,
    height: 185,
    marginLeft: -20,
    marginBottom: -19
  },
  logoImg: {
    marginTop: -100,
    width: 400,
    height: 200
  },
  profileContainer: {
    marginLeft: 900,
    flexDirection: 'row'
  },
  profileImg: {
    width: 50,
    height: 50,
    alignItems: 'flex-end'
  },
  profileText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 10
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBotton: 60
  },
  accountsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBotton: 20
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  partyPlayText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10
  },
  playerText: {
    fontSize: 22,
  },
  gameLobbyText: {
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
  leaveButton: {
    width: 120,
    backgroundColor: '#FFC0CB',
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginBottom: 20,
    marginRight: 10,
    marginTop: 20,
    flexDirection: "row"
  },
  inviteButton: {
    width: 120,
    backgroundColor: '#797EF6',
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: 20,
    flexDirection: "row"
  },
  partyIcon: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  avatarIcon: {
    marginRight: 10,
    width: 30,
    height: 30
  },
  invitePlayersButton: {
    width: 250,
    backgroundColor: '#30D5C8',
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: "row"
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
  socialIconsContainerTop: {
    flexDirection: 'row',
    marginTop: -75,
    marginLeft: 1350,
    marginBottom: 20,  // Adjust the spacing as needed
  },
  socialIconsContainerBottom: {
    flexDirection: 'row',
    marginLeft: 1325,
    marginBottom: 20,
  },
  iconSpacing: {
    marginLeft: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 125,
    fontWeight: 'bold'   // make the text a bit bold
  },
  });
  
  export default styles;