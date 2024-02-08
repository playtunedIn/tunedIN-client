import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',      
    },
    rowContainer: {
        flexDirection: 'row',
    },
    partyIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
        marginTop: 10
    },
    partyPlayText: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10
    },
    gameLobbyText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    accountsContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBotton: 20
    },
    accountContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBotton: 60
    },
    avatarIcon: {
        marginRight: 10,
        width: 30,
        height: 30
    },
    playerText: {
        fontSize: 22,
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
    startButton: {
        width: 250,
        backgroundColor: '#30D5C8',
        paddingHorizontal: 60,
        paddingVertical: 10,
        marginBottom: 20,
        flexDirection: "row"
    },
});
  
export default styles;