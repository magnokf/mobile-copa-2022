import { NativeBaseProvider, StatusBar } from 'native-base'
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading'

import { THEME } from './src/styles/theme'
import { SigIn } from './src/screens/SigIn'

export default function App() {
	const [ fontsLoaded ] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
		Roboto_500Medium
	})
	
	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? <SigIn /> : <Loading />}
		</NativeBaseProvider>
	)
}

