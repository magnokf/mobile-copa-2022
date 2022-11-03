import { NativeBaseProvider, StatusBar } from 'native-base'
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading'

import { THEME } from './src/styles/theme'
import { Pools } from './src/screens/Pools'
import { AuthContextProvider } from './src/contexts/AuthContext'

export default function App() {
	const [ fontsLoaded ] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
		Roboto_500Medium
	})
	
	return (
		<NativeBaseProvider theme={THEME}>
			<AuthContextProvider>
				<StatusBar
					barStyle="light-content"
					backgroundColor="transparent"
					translucent
				/>
				{fontsLoaded ? <Pools /> : <Loading />}
			</AuthContextProvider>
			
		</NativeBaseProvider>
	)
}

