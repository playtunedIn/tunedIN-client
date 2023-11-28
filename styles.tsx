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
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    position: 'relative'
  },
  rowContainer: {
    flexDirection: 'row',
  },
  musicImg: {
    marginTop: 60,
    width: '100%',
    height: '20%'
  },
  footerImg: {
    width: '100%',
    height: 185,
  },
  logoImg: {
    width: '50%',
    height: '30%',
    marginTop: -55,
    paddingTop: 20,
    paddingBottom: 62
  },
  profileImg: {
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
    marginLeft: 140,
    marginTop: -40
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100
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
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: "center", 
    alignItems: "center", 
    marginBottom: 20
  },
  iconSpacing: {
    marginLeft: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 90,
    fontWeight: 'bold',   // make the text a bit bold
    marginBottom: 20
  },
  });
  
  export default styles;