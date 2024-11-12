import { View, ViewProps, ViewStyle } from 'react-native'

interface PaddingType extends ViewProps {
	children: React.ReactNode
	style?: ViewStyle
}

export const Padding = ({ children, style, ...props }: PaddingType) => {
	return (
		<View style={[{ paddingHorizontal: 25, flex: 1 }, style]} {...props}>
			{children}
		</View>
	)
}
