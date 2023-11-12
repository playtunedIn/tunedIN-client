import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { LoginScreen } from './src/components/LoginScreen';
import { WelcomeScreen } from './src/components/WelcomeScreen';
import { PartyPlayScreen } from './src/components/PartyPlayScreen';
import React from 'react';
import { RoundSelection } from './src/components/RoundSelection';
import { HostLobby } from './src/components/HostLobby';
import { GameLobby } from './src/components/GameLobby';
import { QuestionScreen } from './src/components/QuestionScreen';
import { QuestionAnswerScreen } from './src/components/QuestionAnswerScreen';
import { RoundResults } from './src/components/RoundResults';
import { RoundPointsScreen } from './src/components/RoundPointsScreen';
import { SessionResults } from './src/components/SessionResults';
import { SessionWinner } from './src/components/SessionWinner';
import useUserState from './src/components/hooks/useUserState';
import { MultiplayerProvider } from './src/hooks/multiplayer';
import { setupStore } from './src/store/store';


const Stack = createNativeStackNavigator();

export default function App() {
  const userState = useUserState(window);
  const initialRoute = userState.userToken ? "Welcome" : "Login";
  return (
    <Provider store={setupStore()}>
    <MultiplayerProvider >
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="PartyPlay" component={PartyPlayScreen} />
        <Stack.Screen name="RoundSelection" component={RoundSelection} />
        <Stack.Screen name="HostLobby" component={HostLobby} />
        <Stack.Screen name="GameLobby" component={GameLobby} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="QuestionAnswer" component={QuestionAnswerScreen} />
        <Stack.Screen name="RoundResults" component={RoundResults} />
        <Stack.Screen name="RoundPoints" component={RoundPointsScreen} />
        <Stack.Screen name="SessionResults" component={SessionResults} />
        <Stack.Screen name="SessionWinner" component={SessionWinner} />
      </Stack.Navigator>
    </NavigationContainer>
    </MultiplayerProvider>
    </Provider>
  );
}