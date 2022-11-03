import { Center, Icon } from 'native-base'
import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'
import { Fontisto } from '@expo/vector-icons'

export function SigIn() {
	return (
		<Center flex={1} bg="gray.900">
			<Logo width={212} height={40} />
			<Button
				title="ENTRAR COM GOOGLE"
				leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
				type="secondary"
				
			
			/>
		
		</Center>
	
	)
}