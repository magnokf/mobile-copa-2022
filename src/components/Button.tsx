import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

interface Props extends IButtonProps {
	title: string
	type?: 'primary' | 'secondary'
	
	
}

export function Button({ title, type, ...rest }: Props) {
	return (
		<ButtonNativeBase
			w="full"
			h={14}
			rounded={'sm'}
			textTransform={'uppercase'}
			bg={type === 'secondary' ? 'red.500' : 'yellow.500'}
			_pressed={{ bg: type === 'secondary' ? 'red.600' : 'yellow.600' }}
			_loading={{ _spinner: { color: 'black' } }
			}
			{...rest}>
			<Text fontSize={'sm'} color={type==='secondary'? 'white':'black'} fontFamily={'heading'}
			>
				{title}
			</Text>
		</ButtonNativeBase>
	
	)
}